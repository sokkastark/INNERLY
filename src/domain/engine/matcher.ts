import { UserContext, RecommendationOutput, MatchResult, RelevanceTier } from '../models/recommendation';
import { BRA_TYPES } from '../../data/bras';
import { PANTY_TYPES } from '../../data/panties';
import { OUTFIT_ITEMS } from '../../data/outfits';
import { OCCASIONS } from '../../data/occasions';
import { FIT_PROBLEMS } from '../../data/problems';
import { EXPLANATION_TEMPLATES } from '../../content/explanations';

/**
 * Refined Decision Engine for Innerly
 * Separates Relevance from Suitability, enforces Scope Isolation, and includes signature limits.
 */
export function evaluateUserContext(context: UserContext): RecommendationOutput {
  const results: MatchResult[] = [];
  const contextParts: string[] = [];
  const activeScope = context.scope || 'all';

  const outfit = OUTFIT_ITEMS.find((o) => o.id === context.outfitId);
  const occasion = OCCASIONS.find((oc) => oc.id === context.occasionId);
  const problem = FIT_PROBLEMS.find((p) => p.id === context.problemId);

  if (outfit) contextParts.push(outfit.name);
  if (occasion) contextParts.push(occasion.name);
  if (problem) contextParts.push(`Issue: ${problem.title}`);

  const contextSummary = contextParts.length > 0
    ? contextParts.join(' • ')
    : 'General Innerwear Exploration';

  // Evaluate Bras if scope is 'all' or 'bras'
  if (activeScope === 'all' || activeScope === 'bras') {
    BRA_TYPES.forEach((bra) => {
      let tier: RelevanceTier = 'good_option';
      const why: string[] = [];
      const considerations: string[] = [];
      const cannotDetermine: string[] = [...EXPLANATION_TEMPLATES.generalFallback.cannotDetermine];

      // Saree Context
      if (context.outfitId === 'saree') {
        if (bra.id === 'convertible_multiway' || bra.id === 'strapless_bra') {
          tier = 'highly_relevant';
          why.push(...EXPLANATION_TEMPLATES.sareeWedding.recommendedWhy);
          considerations.push(...EXPLANATION_TEMPLATES.sareeWedding.considerations);
          cannotDetermine.push(...EXPLANATION_TEMPLATES.sareeWedding.cannotDetermine);
        } else if (bra.id === 'tshirt_bra' || bra.id === 'full_coverage_bra') {
          tier = 'good_option';
          why.push('Provides smooth cup surface or full support under traditional saree blouse cuts.');
          considerations.push('Verify blouse back neck depth to ensure straps remain hidden.');
        } else if (bra.id === 'sports_bra') {
          tier = 'less_relevant';
          why.push('Sports bras are engineered for athletic bounce control and are not typically styled for saree blouses.');
        } else if (bra.id === 'bralette') {
          tier = 'may_work';
          why.push('Lightweight comfort for home/casual wear, but offers minimal support under heavy saree drapes.');
        }
      }
      // T-Shirt Context
      else if (context.outfitId === 'tshirt') {
        if (bra.id === 'tshirt_bra') {
          tier = 'highly_relevant';
          why.push(...EXPLANATION_TEMPLATES.tshirtEveryday.recommendedWhy);
          considerations.push(...EXPLANATION_TEMPLATES.tshirtEveryday.considerations);
          cannotDetermine.push(...EXPLANATION_TEMPLATES.tshirtEveryday.cannotDetermine);
        } else if (bra.id === 'full_coverage_bra') {
          tier = 'may_work';
          why.push('Offers great support, but visible cup seams may show under thin jersey fabrics.');
        } else if (bra.id === 'sports_bra') {
          tier = context.occasionId === 'gym_sports' ? 'highly_relevant' : 'less_relevant';
          if (tier === 'less_relevant') {
            why.push('Sports bras prioritize bounce control over low-profile everyday tops.');
          }
        }
      }
      // Gym Context
      else if (context.outfitId === 'gym_wear' || context.occasionId === 'gym_sports') {
        if (bra.id === 'sports_bra') {
          tier = 'highly_relevant';
          why.push(...EXPLANATION_TEMPLATES.gymActive.recommendedWhy);
          considerations.push(...EXPLANATION_TEMPLATES.gymActive.considerations);
        } else {
          tier = 'less_relevant';
          why.push('Standard everyday bras do not provide the bounce control or sweat management required for active movement.');
        }
      }
      // Problem-Specific Context
      else if (context.problemId === 'visible_lines') {
        if (bra.id === 'tshirt_bra') {
          tier = 'highly_relevant';
          why.push('Smooth molded cups minimize seam outlines under thin fabrics.');
        } else if (bra.id === 'full_coverage_bra') {
          tier = 'may_work';
          why.push('Stitched cup seams may show through lightweight clothing.');
        }
      } else if (context.problemId === 'visible_straps') {
        if (bra.id === 'strapless_bra' || bra.id === 'convertible_multiway') {
          tier = 'highly_relevant';
          why.push('Detachable or repositionable straps keep bra straps hidden under complex necklines.');
        }
      }

      results.push({
        itemTypeId: bra.id,
        itemTypeCategory: 'bra',
        itemName: bra.name,
        tier,
        why: why.length > 0 ? why : [bra.shortDescription],
        considerations: considerations.length > 0 ? considerations : bra.typicalConstruction,
        cannotDetermine: Array.from(new Set(cannotDetermine))
      });
    });
  }

  // Evaluate Panties if scope is 'all' or 'panties'
  if (activeScope === 'all' || activeScope === 'panties') {
    PANTY_TYPES.forEach((panty) => {
      let tier: RelevanceTier = 'good_option';
      const why: string[] = [];

      if (context.outfitId === 'bodycon' || context.problemId === 'visible_lines') {
        if (panty.id === 'seamless_hipster') {
          tier = 'highly_relevant';
          why.push('Laser-cut or bonded flat edges significantly reduce visible panty lines (VPL).');
        }
      } else if (context.outfitId === 'saree') {
        if (panty.id === 'high_waist_brief') {
          tier = 'highly_relevant';
          why.push('High waist rise sits securely beneath petticoat drawstrings without rolling down.');
        } else if (panty.id === 'boyshorts') {
          tier = 'good_option';
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
        ]
      });
    });
  }

  return {
    hasResults: results.length > 0,
    contextSummary,
    activeScope,
    results
  };
}
