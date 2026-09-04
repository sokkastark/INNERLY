import { UserContext, RecommendationOutput, MatchResult } from '../models/recommendation';
import { BRA_TYPES } from '../../data/bras';
import { PANTY_TYPES } from '../../data/panties';
import { OUTFIT_ITEMS } from '../../data/outfits';
import { OCCASIONS } from '../../data/occasions';
import { FIT_PROBLEMS } from '../../data/problems';
import { EXPLANATION_TEMPLATES } from '../../content/explanations';

/**
 * Deterministic Decision Engine for Innerly
 * Supports partial inputs (Outfit only, Occasion only, Problem only, Body only, etc.)
 */
export function evaluateUserContext(context: UserContext): RecommendationOutput {
  const results: MatchResult[] = [];
  const contextParts: string[] = [];

  const outfit = OUTFIT_ITEMS.find((o) => o.id === context.outfitId);
  const occasion = OCCASIONS.find((oc) => oc.id === context.occasionId);
  const problem = FIT_PROBLEMS.find((p) => p.id === context.problemId);

  if (outfit) contextParts.push(outfit.name);
  if (occasion) contextParts.push(occasion.name);
  if (problem) contextParts.push(`Issue: ${problem.title}`);

  const contextSummary = contextParts.length > 0
    ? contextParts.join(' • ')
    : 'General Innerwear Exploration';

  // Evaluate Bras based on Outfit and/or Occasion and/or Problem
  BRA_TYPES.forEach((bra) => {
    let tier: MatchResult['tier'] = 'good_match';
    const why: string[] = [];
    const considerations: string[] = [];
    const limitations: string[] = [];

    // Rule: Saree + Wedding context
    if (context.outfitId === 'saree' && context.occasionId === 'wedding_festive') {
      if (bra.id === 'multiway_strapless') {
        tier = 'recommended';
        why.push(...EXPLANATION_TEMPLATES.sareeWedding.recommendedWhy);
        considerations.push(...EXPLANATION_TEMPLATES.sareeWedding.considerations);
      } else if (bra.id === 'full_coverage_everyday') {
        tier = 'good_match';
        why.push('Provides high bust support and modest coverage for long traditional drapes.');
        considerations.push('Verify blouse back cut to avoid strap exposure.');
      } else if (bra.id === 'bralette') {
        tier = 'not_ideal';
        why.push('Light support may feel inadequate under heavy saree fabric.');
      }
    }
    // Rule: T-Shirt / Fitted Top
    else if (context.outfitId === 'tshirt') {
      if (bra.id === 'tshirt_bra') {
        tier = 'recommended';
        why.push(...EXPLANATION_TEMPLATES.tshirtEveryday.recommendedWhy);
        considerations.push(...EXPLANATION_TEMPLATES.tshirtEveryday.considerations);
      } else if (bra.id === 'full_coverage_everyday' && bra.paddingType === 'unpadded') {
        tier = 'considerations';
        why.push('Breathable for daily wear, but visible cup seams may show under thin jersey tops.');
      }
    }
    // Rule: Gym Activewear
    else if (context.outfitId === 'gym_wear' || context.occasionId === 'gym_sports') {
      if (bra.id === 'sports_bra') {
        tier = 'recommended';
        why.push(...EXPLANATION_TEMPLATES.gymActive.recommendedWhy);
        considerations.push(...EXPLANATION_TEMPLATES.gymActive.considerations);
      } else if (bra.id !== 'sports_bra') {
        tier = 'not_ideal';
        why.push('Standard daily bras do not provide bounce control required for workout impact.');
      }
    }
    // Partial Rule: Problem based matching
    else if (context.problemId === 'visible_lines' && bra.id === 'tshirt_bra') {
      tier = 'recommended';
      why.push('Molded smooth cups eliminate cup seam outlines under thin clothing.');
    }
    else if (context.problemId === 'visible_straps' && bra.id === 'multiway_strapless') {
      tier = 'recommended';
      why.push('Detachable straps allow strapless or criss-cross positions to stay hidden.');
    }
    // Default matching fallback for partial outfit context
    else if (outfit && bra.suitableOutfits.includes(outfit.id)) {
      tier = 'good_match';
      why.push(`Commonly paired with ${outfit.name} for balanced support and shape.`);
      considerations.push(...outfit.keyConsiderations);
    }

    results.push({
      itemTypeId: bra.id,
      itemTypeCategory: 'bra',
      itemName: bra.name,
      tier,
      why: why.length > 0 ? why : [bra.shortDescription],
      considerations: considerations.length > 0 ? considerations : bra.characteristics,
      limitations: limitations.length > 0 ? limitations : undefined
    });
  });

  // Evaluate Panties if Outfit or Problem context provided
  PANTY_TYPES.forEach((panty) => {
    let tier: MatchResult['tier'] = 'good_match';
    const why: string[] = [];

    if (context.outfitId === 'bodycon' && panty.id === 'seamless_hipster') {
      tier = 'recommended';
      why.push('Laser-cut seamless edges prevent visible panty lines under fitted dresses.');
    } else if (context.outfitId === 'saree' && panty.id === 'high_waist_brief') {
      tier = 'recommended';
      why.push('High waist rise sits securely beneath petticoat drawstrings without rolling down.');
    }

    results.push({
      itemTypeId: panty.id,
      itemTypeCategory: 'panty',
      itemName: panty.name,
      tier,
      why: why.length > 0 ? why : [panty.shortDescription],
      considerations: panty.characteristics
    });
  });

  return {
    hasResults: results.length > 0,
    contextSummary,
    results
  };
}
