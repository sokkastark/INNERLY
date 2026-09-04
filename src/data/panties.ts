import { PantyType } from '../domain/models/taxonomy';

export const PANTY_TYPES: PantyType[] = [
  {
    id: 'seamless_hipster',
    name: 'Seamless / Laser-Cut Hipster',
    shortDescription: 'Designed with flat bonded or laser-cut edges to reduce visible panty lines (VPL) under fitted clothing.',
    coverage: 'three_quarter',
    typicalRise: 'mid_rise',
    typicalConstruction: ['Laser-cut edge binding', 'Bonded seam technology', 'Smooth stretch fabric'],
    fabricOptions: ['Microfiber', 'Nylon elastane blend'],
    usefulFor: ['bodycon', 'tshirt', 'shirt'],
    limitations: [
      'Outer garment thickness, fit tightness, and lighting still affect overall visibility.'
    ]
  },
  {
    id: 'high_waist_brief',
    name: 'High-Waist Brief',
    shortDescription: 'Features higher waist coverage sitting near or above the natural navel line for smooth waistline transition.',
    coverage: 'full',
    typicalRise: 'high_waist',
    typicalConstruction: ['Wide elastic or double-layer waistband', 'Full seat coverage'],
    fabricOptions: ['Cotton', 'Modal', 'Microfiber'],
    usefulFor: ['saree', 'chudidar', 'kurti'],
    limitations: [
      'May peek above low-rise jeans or low-waist trousers.'
    ]
  },
  {
    id: 'boyshorts',
    name: 'Boyshorts',
    shortDescription: 'Extends lower down the leg openings to reduce inner thigh friction under skirts and kurtis.',
    coverage: 'full',
    typicalRise: 'mid_rise',
    typicalConstruction: ['Leg-band extension cut', 'Full back and side coverage'],
    fabricOptions: ['Cotton blend', 'Modal', 'Microfiber'],
    usefulFor: ['saree', 'kurti', 'chudidar'],
    limitations: [
      'Leg seams may roll up if leg elastic size is too small.'
    ]
  }
];
