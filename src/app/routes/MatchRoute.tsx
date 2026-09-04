import React, { useState } from 'react';
import { UserContext } from '../../domain/models/recommendation';
import { evaluateUserContext } from '../../domain/engine/matcher';
import { OUTFIT_ITEMS } from '../../data/outfits';
import { OCCASIONS } from '../../data/occasions';
import { FIT_PROBLEMS } from '../../data/problems';
import { RecommendationCard } from '../../components/cards/RecommendationCard';
import { Button } from '../../components/ui/Button';
import { RefreshCw, Filter, HelpCircle } from 'lucide-react';

export const MatchRoute: React.FC = () => {
  const [context, setContext] = useState<UserContext>({ scope: 'all' });
  const [showLessRelevant, setShowLessRelevant] = useState(false);

  const output = evaluateUserContext(context);

  const relevantResults = output.results.filter((r) => r.tier !== 'less_relevant');
  const lessRelevantResults = output.results.filter((r) => r.tier === 'less_relevant');

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

  const handleScopeChange = (scope: 'all' | 'bras' | 'panties') => {
    setContext((prev) => ({ ...prev, scope }));
  };

  const handleReset = () => {
    setContext({ scope: 'all' });
  };

  return (
    <div className="container" style={{ paddingTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-xs)' }}>Match My Outfit & Situation</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Select what you know. All fields are optional. Choose whether you want to focus on bras, panties, or full outerwear guidance.
        </p>
      </div>

      {/* Question Scope Isolation Tabs */}
      <div style={{ display: 'flex', gap: 'var(--space-xs)', alignItems: 'center' }}>
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginRight: '8px' }}>
          Question Scope:
        </span>
        <button
          onClick={() => handleScopeChange('all')}
          style={{
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: (context.scope || 'all') === 'all' ? 600 : 400,
            backgroundColor: (context.scope || 'all') === 'all' ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
            color: (context.scope || 'all') === 'all' ? '#FFFFFF' : 'var(--color-text-primary)'
          }}
        >
          Entire Outfit
        </button>
        <button
          onClick={() => handleScopeChange('bras')}
          style={{
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: context.scope === 'bras' ? 600 : 400,
            backgroundColor: context.scope === 'bras' ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
            color: context.scope === 'bras' ? '#FFFFFF' : 'var(--color-text-primary)'
          }}
        >
          Bras Only
        </button>
        <button
          onClick={() => handleScopeChange('panties')}
          style={{
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: context.scope === 'panties' ? 600 : 400,
            backgroundColor: context.scope === 'panties' ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
            color: context.scope === 'panties' ? '#FFFFFF' : 'var(--color-text-primary)'
          }}
        >
          Panties Only
        </button>
      </div>

      {/* Input Selectors */}
      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* Outfit Selection */}
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
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)'
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Occasion Selection */}
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
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)'
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Problem Selection */}
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
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)'
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

      {/* Insufficient Information Banner */}
      {output.insufficientInfo && (
        <div style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-strong)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
          <HelpCircle size={24} color="var(--color-brand-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h3 style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-brand-primary)', marginBottom: '4px' }}>
              Select a situation above to begin
            </h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {output.insufficientInfoPrompt}
            </p>
          </div>
        </div>
      )}

      {/* Summary Header */}
      {!output.insufficientInfo && (
        <div>
          <h2 style={{ fontSize: 'var(--font-size-xl)' }}>
            Guidance for: <span style={{ color: 'var(--color-brand-primary)' }}>{output.contextSummary}</span>
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Relevant considerations categorized by relevance tier.
          </p>
        </div>
      )}

      {/* Relevant Results Grid */}
      {!output.insufficientInfo && (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
          {relevantResults.map((res) => (
            <RecommendationCard key={res.itemTypeId} result={res} />
          ))}
        </div>
      )}

      {/* Collapsible Less Relevant Items */}
      {!output.insufficientInfo && lessRelevantResults.length > 0 && (
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <button
            onClick={() => setShowLessRelevant(!showLessRelevant)}
            style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Filter size={14} />
            {showLessRelevant ? 'Hide options less relevant to this situation' : `Show ${lessRelevantResults.length} option(s) less relevant to this situation`}
          </button>

          {showLessRelevant && (
            <div className="grid sm:grid-cols-1 lg:grid-cols-2" style={{ marginTop: 'var(--space-md)' }}>
              {lessRelevantResults.map((res) => (
                <RecommendationCard key={res.itemTypeId} result={res} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
