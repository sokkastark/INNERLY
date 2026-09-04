import { OuterwearItem } from '../domain/models/taxonomy';

export const OUTFIT_ITEMS: OuterwearItem[] = [
  {
    id: 'saree',
    name: 'Saree & Blouse',
    category: 'traditional_indian',
    description: 'Traditional Indian drape requiring attention to blouse back depth, armhole cutouts, and petticoat/shapewear waistbands.',
    keyConsiderations: [
      'Blouse back cut depth determines strap exposure risk.',
      'Shoulder seam width dictates strap positioning.',
      'Petticoat drawstring height affects waistline comfort and seam flattening.'
    ]
  },
  {
    id: 'kurti',
    name: 'Kurti / Straight Suit',
    category: 'traditional_indian',
    description: 'Everyday traditional and fusion wear ranging from relaxed cottons to fitted side-slit kurtis.',
    keyConsiderations: [
      'Fabric opacity under bright daylight.',
      'Armhole and neck depth to prevent strap peek.',
      'Breathability in warm climate conditions.'
    ]
  },
  {
    id: 'tshirt',
    name: 'T-Shirt / Fitted Top',
    category: 'casual',
    description: 'Fine jersey cotton or knit fabrics that highlight texture, cup seams, and fabric edges.',
    keyConsiderations: [
      'Smooth cup surface to reduce visible cup outlines.',
      'Color tone matching (shades close to skin tone under white or sheer fabrics).',
      'Proper cup fit to prevent upper bust gapping or spillage.'
    ]
  },
  {
    id: 'bodycon',
    name: 'Bodycon / Fitted Dress',
    category: 'fitted',
    description: 'Silhouette-hugging garments requiring smooth foundation lines from bust to hip.',
    keyConsiderations: [
      'Laser-cut or flat-bonded seam edges.',
      'Smooth untextured cup surface.',
      'Secure band anchor to prevent garment shifting.'
    ]
  },
  {
    id: 'gym_wear',
    name: 'Activewear / Gym Gear',
    category: 'active',
    description: 'High-movement leggings and tops requiring bounce control and sweat management.',
    keyConsiderations: [
      'Moisture-managing synthetic or technical fabric blend.',
      'Bounce control structure (encapsulation vs compression).',
      'Chafing-free flatlock stitching.'
    ]
  }
];
