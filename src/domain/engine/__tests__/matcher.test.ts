import { describe, it, expect } from 'vitest';
import { evaluateUserContext } from '../matcher';

describe('Innerly Decision Engine', () => {
  it('evaluates partial input: Outfit only (Saree)', () => {
    const output = evaluateUserContext({ outfitId: 'saree' });
    expect(output.hasResults).toBe(true);
    expect(output.contextSummary).toContain('Saree & Blouse');
    const recommendedBra = output.results.find(
      (r) => r.itemTypeCategory === 'bra' && r.tier === 'good_match'
    );
    expect(recommendedBra).toBeDefined();
  });

  it('evaluates compound input: Saree + Wedding', () => {
    const output = evaluateUserContext({
      outfitId: 'saree',
      occasionId: 'wedding_festive'
    });
    expect(output.contextSummary).toContain('Saree');
    expect(output.contextSummary).toContain('Wedding');
    
    const multiwayBra = output.results.find((r) => r.itemTypeId === 'multiway_strapless');
    expect(multiwayBra?.tier).toBe('recommended');
    expect(multiwayBra?.why[0]).toContain('Multiway');
  });

  it('evaluates problem-based partial input: Visible Straps', () => {
    const output = evaluateUserContext({ problemId: 'visible_straps' });
    const match = output.results.find((r) => r.itemTypeId === 'multiway_strapless');
    expect(match?.tier).toBe('recommended');
  });
});
