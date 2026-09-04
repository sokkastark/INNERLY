import { UserContext, RecommendationOutput, MatchResult, RelevanceTier } from '../models/recommendation';
import { EvidenceLevel } from '../models/taxonomy';
import { BRA_TYPES } from '../../data/bras';
import { PANTY_TYPES } from '../../data/panties';
import { OUTFIT_ITEMS } from '../../data/outfits';
import { OCCASIONS } from '../../data/occasions';
import { FIT_PROBLEMS } from '../../data/problems';
import { EXPLANATION_TEMPLATES } from '../../content/explanations';

/**
 * Innerly Knowledge v1 Decision Engine
 * Evaluates relevance, evidence levels, scope isolation, and handles insufficient information gracefully.
 */
export function evaluateUserContext(context: UserContext): RecommendationOutput {
  const activeScope = context.scope || 'all';

  // Check if context has insufficient input information
  const isBlankContext =
    !context.outfitId &&
    !context.occasionId &&
    !context.problemId &&
    !context.braTypeId &&
    !context.pantyTypeId &&
    !context.fitVariables;

  if (isBlankContext) {
    return {
      hasResults: false,
      insufficientInfo: true,
      insufficientInfoPrompt: "There isn't enough information to narrow down specific guidance yet. Select an outfit, occasion, or fit issue above to receive targeted decision support.",
      contextSummary: 'No Situation Selected',
      activeScope,
      results: []
    };
  }

  const results: MatchResult[] = [];
  const contextParts: string[] = [];

  const outfit = OUTFIT_ITEMS.find((o) => o.id === context.outfitId);
  const occasion = OCCASIONS.find((oc) => oc.id === context.occasionId);
  const problem = FIT_PROBLEMS.find((p) => p.id === context.problemId);

  if (outfit) contextParts.push(outfit.name);
  if (occasion) contextParts.push(occasion.name);
  if (problem) contextParts.push(`Issue: ${problem.title}`);
  if (context.fitVariables?.breast?.spacing) {
    contextParts.push(`Spacing: ${context.fitVariables.breast.spacing.replace('_', ' ')}`);
  }

  const contextSummary = contextParts.length > 0 ? contextParts.join(' • ') : 'Selected Context';

  // Evaluate Bras if scope is 'all' or 'bras'
  if (activeScope === 'all' || activeScope === 'bras') {
    BRA_TYPES.forEach((bra) => {
      let tier: RelevanceTier = 'good_option';
      let evidenceLevel: EvidenceLevel = 'common_guidance';
      const why: string[] = [];
      const considerations: string[] = [];
      const cannotDetermine: string[] = [...EXPLANATION_TEMPLATES.generalFallback.cannotDetermine];

      // Saree Context
      if (context.outfitId === 'saree') {
        if (bra.id === 'convertible_multiway' || bra.id === 'strapless_bra') {
          tier = 'highly_relevant';
          evidenceLevel = 'fact';
          why.push(...EXPLANATION_TEMPLATES.sareeWedding.recommendedWhy);
          considerations.push(...EXPLANATION_TEMPLATES.sareeWedding.considerations);
          cannotDetermine.push(...EXPLANATION_TEMPLATES.sareeWedding.cannotDetermine);
        } else if (bra.id === 'tshirt_bra' || bra.id === 'full_coverage_bra') {
          tier = 'good_option';
          evidenceLevel = 'context_dependent';
          why.push('Provides smooth cup surface or full support under traditional saree blouse cuts.');
          considerations.push('Verify blouse back neck depth to ensure straps remain hidden.');
        } else if (bra.id === 'sports_bra') {
          tier = 'less_relevant';
          evidenceLevel = 'fact';
          why.push('Sports bras are engineered for athletic bounce control and are not typically styled for saree blouses.');
        } else if (bra.id === 'bralette') {
          tier = 'may_work';
          evidenceLevel = 'context_dependent';
          why.push('Lightweight comfort for home/casual wear, but offers minimal support under heavy saree drapes.');
        }
      }
      // T-Shirt Context
      else if (context.outfitId === 'tshirt') {
        if (bra.id === 'tshirt_bra') {
          tier = 'highly_relevant';
          evidenceLevel = 'common_guidance';
          why.push(...EXPLANATION_TEMPLATES.tshirtEveryday.recommendedWhy);
          considerations.push(...EXPLANATION_TEMPLATES.tshirtEveryday.considerations);
          cannotDetermine.push(...EXPLANATION_TEMPLATES.tshirtEveryday.cannotDetermine);
        } else if (bra.id === 'full_coverage_bra') {
          tier = 'may_work';
          evidenceLevel = 'context_dependent';
          why.push('Offers support, but stitched cup seams may show under thin jersey fabrics.');
        } else if (bra.id === 'sports_bra') {
          tier = context.occasionId === 'gym_sports' ? 'highly_relevant' : 'less_relevant';
          evidenceLevel = 'fact';
          if (tier === 'less_relevant') {
            why.push('Sports bras prioritize bounce compression over low-profile everyday tops.');
          }
        }
      }
      // Gym Context
      else if (context.outfitId === 'gym_wear' || context.occasionId === 'gym_sports') {
        if (bra.id === 'sports_bra') {
          tier = 'highly_relevant';
          evidenceLevel = 'fact';
          why.push(...EXPLANATION_TEMPLATES.gymActive.recommendedWhy);
          considerations.push(...EXPLANATION_TEMPLATES.gymActive.considerations);
        } else {
          tier = 'less_relevant';
          evidenceLevel = 'fact';
          why.push('Standard everyday bras do not provide the bounce control or sweat management required for active movement.');
        }
      }
      // Problem-Specific Context
      else if (context.problemId === 'visible_lines') {
        if (bra.id === 'tshirt_bra') {
          tier = 'highly_relevant';
          evidenceLevel = 'common_guidance';
          why.push('Smooth molded cups minimize seam outlines under thin fabrics.');
        } else if (bra.id === 'full_coverage_bra') {
          tier = 'may_work';
          evidenceLevel = 'context_dependent';
          why.push('Stitched cup seams may show through lightweight clothing.');
        }
      } else if (context.problemId === 'visible_straps') {
        if (bra.id === 'strapless_bra' || bra.id === 'convertible_multiway') {
          tier = 'highly_relevant';
          evidenceLevel = 'fact';
          why.push('Detachable or repositionable straps keep bra straps hidden under complex necklines.');
        }
      }

      // Fit Variable Interactions (e.g. Close-set breasts)
      if (context.fitVariables?.breast?.spacing === 'close_set') {
        if (bra.id === 'tshirt_bra' || bra.id === 'bralette') {
          considerations.push('A lower center gore (plunge cut) may prevent wire resting on breast tissue.');
        }
      }

      results.push({
        itemTypeId: bra.id,
        itemTypeCategory: 'bra',
        itemName: bra.name,
        tier,
        why: why.length > 0 ? why : [bra.shortDescription],
        considerations: considerations.length > 0 ? considerations : bra.typicalConstruction,
        cannotDetermine: Array.from(new Set(cannotDetermine)),
        evidenceLevel
      });
    });
  }

  // Evaluate Panties if scope is 'all' or 'panties'
  if (activeScope === 'all' || activeScope === 'panties') {
    PANTY_TYPES.forEach((panty) => {
      let tier: RelevanceTier = 'good_option';
      let evidenceLevel: EvidenceLevel = 'common_guidance';
      const why: string[] = [];

      if (context.outfitId === 'bodycon' || context.problemId === 'visible_lines') {
        if (panty.id === 'seamless_hipster') {
          tier = 'highly_relevant';
          evidenceLevel = 'common_guidance';
          why.push('Laser-cut or bonded flat edges significantly reduce visible panty lines (VPL).');
        }
      } else if (context.outfitId === 'saree') {
        if (panty.id === 'high_waist_brief') {
          tier = 'highly_relevant';
          evidenceLevel = 'common_guidance';
          why.push('High waist rise sits securely beneath petticoat drawstrings without rolling down.');
        } else if (panty.id === 'boyshorts') {
          tier = 'good_option';
          evidenceLevel = 'common_guidance';
          why.push('Extends lower down the leg to reduce inner thigh friction during long walking periods.');
        }
      }

      results.push({
        itemTypeId: panty.id,
        itemTypeCategory: 'panty',
        itemName: panty.name,
        tier,
        why: why.length > 0 ? why : [panty.shortDescription],
        considerations: panty.typicalConstruction,
        cannotDetermine: [
          'Whether panty lines will be completely invisible without testing under your specific outer fabric.'
        ],
        evidenceLevel
      });
    });
  }

  return {
    hasResults: results.length > 0,
    insufficientInfo: false,
    contextSummary,
    activeScope,
    results
  };
}
