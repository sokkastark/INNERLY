import { describe, it, expect } from 'vitest';
import { evaluateUserContext } from '../matcher';

describe('Innerly Knowledge v1 - Real-World User Scenario Suite', () => {
  // Scenario 1: Saree + Office + VPL
  it('Scenario 1: Saree + Office + VPL - Correct relevance tiers and boundary info', () => {
    const output = evaluateUserContext({
      outfitId: 'saree',
      occasionId: 'office_work',
      problemId: 'visible_lines',
      scope: 'bras'
    });

    expect(output.hasResults).toBe(true);
    expect(output.insufficientInfo).toBe(false);
    expect(output.contextSummary).toContain('Saree');
    expect(output.contextSummary).toContain('Office');

    // Sports bra should be less_relevant
    const sportsBra = output.results.find((r) => r.itemTypeId === 'sports_bra');
    expect(sportsBra?.tier).toBe('less_relevant');

    // Convertible / Strapless should be highly_relevant
    const convertible = output.results.find((r) => r.itemTypeId === 'convertible_multiway');
    expect(convertible?.tier).toBe('highly_relevant');

    // Scope 'bras' means zero panty results
    const panties = output.results.filter((r) => r.itemTypeCategory === 'panty');
    expect(panties.length).toBe(0);

    // Has cannotDetermine boundary
    expect(convertible?.cannotDetermine.length).toBeGreaterThan(0);
  });

  // Scenario 2: Gym + High Movement
  it('Scenario 2: Gym + High Movement - Sports bra highly relevant, standard bras less relevant', () => {
    const output = evaluateUserContext({
      outfitId: 'gym_wear',
      occasionId: 'gym_sports',
      scope: 'bras'
    });

    const sportsBra = output.results.find((r) => r.itemTypeId === 'sports_bra');
    expect(sportsBra?.tier).toBe('highly_relevant');

    const tshirtBra = output.results.find((r) => r.itemTypeId === 'tshirt_bra');
    expect(tshirtBra?.tier).toBe('less_relevant');
  });

  // Scenario 3: Deep-Neck Blouse + Wedding
  it('Scenario 3: Deep-Neck Blouse + Wedding - Multiway/Strapless highly relevant', () => {
    const output = evaluateUserContext({
      outfitId: 'saree',
      occasionId: 'wedding_festive',
      problemId: 'visible_straps',
      scope: 'bras'
    });

    const multiway = output.results.find((r) => r.itemTypeId === 'convertible_multiway');
    expect(multiway?.tier).toBe('highly_relevant');
  });

  // Scenario 4: T-Shirt + VPL
  it('Scenario 4: T-Shirt + VPL - T-shirt bra highly relevant, full coverage may work', () => {
    const output = evaluateUserContext({
      outfitId: 'tshirt',
      problemId: 'visible_lines',
      scope: 'bras'
    });

    const tshirtBra = output.results.find((r) => r.itemTypeId === 'tshirt_bra');
    expect(tshirtBra?.tier).toBe('highly_relevant');

    const fullCoverage = output.results.find((r) => r.itemTypeId === 'full_coverage_bra');
    expect(fullCoverage?.tier).toBe('may_work');
  });

  // Scenario 5: Panties Only Scope
  it('Scenario 5: Panties Only Scope - Returns zero bra items', () => {
    const output = evaluateUserContext({
      outfitId: 'saree',
      scope: 'panties'
    });

    const braItems = output.results.filter((r) => r.itemTypeCategory === 'bra');
    expect(braItems.length).toBe(0);

    const pantyItems = output.results.filter((r) => r.itemTypeCategory === 'panty');
    expect(pantyItems.length).toBeGreaterThan(0);
  });

  // Scenario 6: Insufficient Info (Blank Query)
  it('Scenario 6: Insufficient Info - Gracefully flags insufficient information', () => {
    const output = evaluateUserContext({});
    expect(output.hasResults).toBe(false);
    expect(output.insufficientInfo).toBe(true);
    expect(output.insufficientInfoPrompt).toContain("isn't enough information");
    expect(output.results.length).toBe(0);
  });
});
