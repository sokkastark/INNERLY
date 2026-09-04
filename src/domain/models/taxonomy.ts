// Taxonomy Data Models for Innerly

export interface BraType {
  id: string;
  name: string;
  shortDescription: string;
  characteristics: string[];
  coverageLevel: 'full' | 'three_quarter' | 'half' | 'demi' | 'minimal';
  supportLevel: 'high' | 'medium' | 'light';
  wireType: 'underwire' | 'wireless' | 'both_available';
  paddingType: 'padded' | 'semi_padded' | 'unpadded' | 'removable';
  suitableOutfits: string[]; // Outerwear IDs
  commonProblemsSolved: string[]; // Problem IDs
}

export interface PantyType {
  id: string;
  name: string;
  shortDescription: string;
  coverage: 'full' | 'moderate' | 'minimal' | 'thong';
  waistRise: 'high_waist' | 'mid_rise' | 'low_rise';
  characteristics: string[];
  seamlessAvailable: boolean;
  suitableOutfits: string[];
  commonProblemsSolved: string[];
}

export interface FabricType {
  id: string;
  name: string;
  description: string;
  breathability: 'high' | 'medium' | 'low';
  stretch: 'high' | 'medium' | 'low';
  bestForOccasions: string[];
  careNotes: string;
}

export interface OuterwearItem {
  id: string;
  name: string;
  category: 'traditional' | 'casual' | 'formal' | 'active' | 'fitted';
  description: string;
  keyConsiderations: string[]; // e.g., necklines, back depth, transparency, cling
}

export interface OccasionItem {
  id: string;
  name: string;
  activityLevel: 'restful' | 'moderate' | 'active' | 'high_intensity';
  typicalDurationHours: number;
  keyNeeds: string[]; // e.g., breathability, posture support, invisible seams
}

export interface FitProblem {
  id: string;
  title: string;
  symptom: string;
  possibleCauses: string[];
  checkpoints: string[];
}

export interface BodyFeature {
  id: string;
  category: 'shape' | 'breast' | 'hip';
  title: string;
  description: string;
  keyConsiderations: string[];
}
