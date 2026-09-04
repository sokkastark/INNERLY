// Taxonomy Models - Decoupling Type, Construction, Fabric, and Performance

export type CoverageLevel = 'full' | 'three_quarter' | 'half' | 'demi' | 'minimal' | 'varies';
export type SupportLevel = 'high' | 'medium' | 'light' | 'varies';
export type WireType = 'underwire' | 'wireless' | 'both_available';
export type RiseType = 'high_waist' | 'mid_rise' | 'low_rise';

export interface BraType {
  id: string;
  name: string;
  shortDescription: string;
  typicalConstruction: string[];   // e.g., Molded cups, flat seams, side boning
  coverageRange: CoverageLevel;    // Typical or varies
  supportRange: SupportLevel;      // Varies by construction & fit
  wireOptions: WireType;
  fabricOptions: string[];         // e.g., Cotton, Modal, Microfiber
  usefulFor: string[];             // Situations or outerwear IDs where relevant
  limitations: string[];           // Honest limitations (e.g. Invisibility not 100% guaranteed)
}

export interface PantyType {
  id: string;
  name: string;
  shortDescription: string;
  coverage: CoverageLevel;
  typicalRise: RiseType;
  typicalConstruction: string[];
  fabricOptions: string[];
  usefulFor: string[];
  limitations: string[];
}

export interface FabricType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  bestForOccasions: string[];
  careNotes: string;
}

export interface OuterwearItem {
  id: string;
  name: string;
  category: 'traditional_indian' | 'casual' | 'formal' | 'active' | 'fitted';
  description: string;
  keyConsiderations: string[]; // e.g., blouse back depth, side slits, opacity
}

export interface OccasionItem {
  id: string;
  name: string;
  activityLevel: 'restful' | 'moderate' | 'active' | 'high_intensity';
  typicalDurationHours: number;
  keyNeeds: string[];
}

export interface FitProblem {
  id: string;
  title: string;
  symptom: string;
  possibleCauses: string[];
  checkpoints: string[];
}
