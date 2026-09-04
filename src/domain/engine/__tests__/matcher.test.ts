import { describe, it, expect } from 'vitest';
import { evaluateUserContext } from '../matcher';

describe('Innerly Decision Engine - Refined Logic', () => {
  it('marks Sports Bra as less_relevant for Saree context', () => {
    const output = evaluateUserContext({ outfitId: 'saree', scope: 'bras' });
    const sportsBra = output.results.find((r) => r.itemTypeId === 'sports_bra');
    expect(sportsBra?.tier).toBe('less_relevant');
  });

  it('marks Convertible/Strapless as highly_relevant for Saree context', () => {
    const output = evaluateUserContext({ outfitId: 'saree', scope: 'bras' });
    const multiway = output.results.find((r) => r.itemTypeId === 'convertible_multiway');
    expect(multiway?.tier).toBe('highly_relevant');
  });

  it('enforces scope isolation when scope is bras', () => {
    const output = evaluateUserContext({ outfitId: 'saree', scope: 'bras' });
    const pantyItems = output.results.filter((r) => r.itemTypeCategory === 'panty');
    expect(pantyItems.length).toBe(0);
  });

  it('includes signature cannotDetermine field in recommendation results', () => {
    const output = evaluateUserContext({ outfitId: 'tshirt' });
    expect(output.results[0].cannotDetermine).toBeDefined();
    expect(output.results[0].cannotDetermine.length).toBeGreaterThan(0);
  });
});
