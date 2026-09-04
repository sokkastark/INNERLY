// Refined Recommendation & Matcher Domain Models

export type RelevanceTier =
  | 'highly_relevant'   // Directly addresses the user's specific situation
  | 'good_option'       // Generally appropriate option
  | 'may_work'          // Could work depending on fit, garment cut, or fabric
  | 'less_relevant';     // Not relevant to the selected situation

export interface UserContext {
  scope?: 'all' | 'bras' | 'panties'; // Question scope isolation
  outfitId?: string;
  occasionId?: string;
  problemId?: string;
  braTypeId?: string;
  pantyTypeId?: string;
  fabricId?: string;
  bodyFeatureId?: string;
  supportPreference?: 'light' | 'medium' | 'high';
  coveragePreference?: 'full' | 'moderate' | 'minimal';
}

export interface MatchResult {
  itemTypeId: string;
  itemTypeCategory: 'bra' | 'panty' | 'fabric';
  itemName: string;
  tier: RelevanceTier;
  why: string[];               // What characteristic of the situation caused this recommendation
  considerations: string[];   // Key fit, fabric, or strap details to check
  cannotDetermine: string[];  // Signature "What Innerly can't tell you from this info"
}

export interface RecommendationOutput {
  hasResults: boolean;
  contextSummary: string;
  activeScope: 'all' | 'bras' | 'panties';
  results: MatchResult[];
}
