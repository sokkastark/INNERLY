import React, { useState } from 'react';
import { UserContext } from '../../domain/models/recommendation';
import { evaluateUserContext } from '../../domain/engine/matcher';
import { OUTFIT_ITEMS } from '../../data/outfits';
import { OCCASIONS } from '../../data/occasions';
import { FIT_PROBLEMS } from '../../data/problems';
import { RecommendationCard } from '../../components/cards/RecommendationCard';
import { Button } from '../../components/ui/Button';
import { RefreshCw } from 'lucide-react';

export const MatchRoute: React.FC = () => {
  const [context, setContext] = useState<UserContext>({});

  const output = evaluateUserContext(context);

  const handleSelectOutfit = (outfitId: string) => {
    setContext((prev) => ({
      ...prev,
      outfitId: prev.outfitId === outfitId ? undefined : outfitId
    }));
  };

  const handleSelectOccasion = (occasionId: string) => {
    setContext((prev) => ({
      ...prev,
      occasionId: prev.occasionId === occasionId ? undefined : occasionId
    }));
  };

  const handleSelectProblem = (problemId: string) => {
    setContext((prev) => ({
      ...prev,
      problemId: prev.problemId === problemId ? undefined : problemId
    }));
  };

  const handleReset = () => {
    setContext({});
  };

  return (
    <div className="container" style={{ paddingTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-xs)' }}>Match My Outfit & Situation</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Select what you know. You can pick just an outfit, an occasion, or a specific problem — all fields are optional.
        </p>
      </div>

      {/* Partial Input Selector Controls */}
      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        
        {/* Step 1: Outfit Selection (Optional) */}
        <div>
          <label style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
            1. Outerwear / Garment (Optional)
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
            {OUTFIT_ITEMS.map((item) => {
              const isSelected = context.outfitId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectOutfit(item.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: isSelected ? 600 : 400,
                    backgroundColor: isSelected ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)',
                    border: '1px solid transparent',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Occasion Selection (Optional) */}
        <div>
          <label style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
            2. Occasion / Activity (Optional)
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
            {OCCASIONS.map((item) => {
              const isSelected = context.occasionId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectOccasion(item.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: isSelected ? 600 : 400,
                    backgroundColor: isSelected ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)',
                    border: '1px solid transparent',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Specific Problem (Optional) */}
        <div>
          <label style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
            3. Specific Issue to Address (Optional)
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
            {FIT_PROBLEMS.map((item) => {
              const isSelected = context.problemId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectProblem(item.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: isSelected ? 600 : 400,
                    backgroundColor: isSelected ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)',
                    border: '1px solid transparent',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reset Action */}
        {(context.outfitId || context.occasionId || context.problemId) && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-md)' }}>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RefreshCw size={14} style={{ marginRight: '6px' }} /> Clear Selection
            </Button>
          </div>
        )}
      </div>

      {/* Results Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
        <div>
          <h2 style={{ fontSize: 'var(--font-size-xl)' }}>
            Guidance for: <span style={{ color: 'var(--color-brand-primary)' }}>{output.contextSummary}</span>
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Explainable match assessments categorized by suitability tier.
          </p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        {output.results.map((res) => (
          <RecommendationCard key={res.itemTypeId} result={res} />
        ))}
      </div>
    </div>
  );
};
