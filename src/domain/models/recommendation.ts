// Recommendation & Matcher Domain Models

export type MatchTier =
  | 'recommended'       // Recommended consideration
  | 'good_match'        // Good match
  | 'conditional'       // May work depending on fit
  | 'considerations'    // Things to consider
  | 'not_ideal';        // Not ideal for this situation

export interface UserContext {
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
  tier: MatchTier;
  why: string[];               // Primary reasons explaining the match
  considerations: string[];   // Key fit, fabric, or strap details to check
  limitations?: string[];      // When to avoid this choice
}

export interface RecommendationOutput {
  hasResults: boolean;
  contextSummary: string;       // Summary of user's query context (e.g. "Saree + Wedding")
  results: MatchResult[];
}
