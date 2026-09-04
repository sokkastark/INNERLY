import { OccasionItem } from '../domain/models/taxonomy';

export const OCCASIONS: OccasionItem[] = [
  {
    id: 'office_work',
    name: 'Office & Workday',
    activityLevel: 'moderate',
    typicalDurationHours: 9,
    keyNeeds: [
      'All-day comfort without dig-in',
      'Breathable natural cotton or modal fabrics',
      'Modest full or 3/4 cup coverage'
    ]
  },
  {
    id: 'wedding_festive',
    name: 'Wedding & Festive',
    activityLevel: 'moderate',
    typicalDurationHours: 6,
    keyNeeds: [
      'Versatile strap positioning for fancy blouses',
      'Discreet lift under heavy embellished drapes',
      'Secure stay-put fit for dancing'
    ]
  },
  {
    id: 'gym_sports',
    name: 'Gym & Sports',
    activityLevel: 'high_intensity',
    typicalDurationHours: 2,
    keyNeeds: [
      'High bounce control',
      'Rapid dry sweat evacuation',
      'Pressure-free racerback distribution'
    ]
  },
  {
    id: 'home_relaxing',
    name: 'Home & Lounge',
    activityLevel: 'restful',
    typicalDurationHours: 12,
    keyNeeds: [
      'Zero wire pressure',
      'Soft non-restrictive band',
      'Maximum airflow and natural shape'
    ]
  }
];
