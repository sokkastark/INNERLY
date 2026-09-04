import { PantyType } from '../domain/models/taxonomy';

export const PANTY_TYPES: PantyType[] = [
  {
    id: 'seamless_hipster',
    name: 'Seamless Laser-Cut Hipster',
    shortDescription: 'Flat edge finishing prevents visible panty lines (VPL) under fitted trousers or dresses.',
    coverage: 'moderate',
    waistRise: 'mid_rise',
    characteristics: ['No elastic seam stitching', 'Microfiber stretch', 'Invisible under tight clothes'],
    seamlessAvailable: true,
    suitableOutfits: ['bodycon', 'tshirt', 'shirt'],
    commonProblemsSolved: ['visible_lines']
  },
  {
    id: 'high_waist_brief',
    name: 'High-Waist Cotton Brief',
    shortDescription: 'Gentle midsection smoothing and full seat coverage for sarees and traditional wear.',
    coverage: 'full',
    waistRise: 'high_waist',
    characteristics: ['Sits comfortably at natural waist', '100% breathable cotton gusset', 'Secure stay-up fit'],
    seamlessAvailable: false,
    suitableOutfits: ['saree', 'chudidar', 'kurti'],
    commonProblemsSolved: ['band_riding_up', 'chafing_sweat']
  },
  {
    id: 'boyshorts',
    name: 'Boyshorts',
    shortDescription: 'Full coverage leg openings to prevent thigh chafing under skirts and flared kurtis.',
    coverage: 'full',
    waistRise: 'mid_rise',
    characteristics: ['Extends down the upper thigh', 'Zero ride-up construction', 'Ideal for long active days'],
    seamlessAvailable: true,
    suitableOutfits: ['saree', 'kurti', 'chudidar'],
    commonProblemsSolved: ['chafing_sweat']
  }
];
