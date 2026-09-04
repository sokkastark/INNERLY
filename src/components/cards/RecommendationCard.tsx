import React from 'react';
import { MatchResult } from '../../domain/models/recommendation';
import { Badge } from '../ui/Badge';
import { CheckCircle2, Info, HelpCircle } from 'lucide-react';

interface RecommendationCardProps {
  result: MatchResult;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ result }) => {
  return (
    <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
        <div>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {result.itemTypeCategory.toUpperCase()}
          </span>
          <h3 style={{ fontSize: 'var(--font-size-xl)', marginTop: '2px' }}>{result.itemName}</h3>
        </div>
        <Badge tier={result.tier} />
      </div>

      {/* Why Section */}
      {result.why.length > 0 && (
        <div style={{ backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)' }}>
          <h4 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <CheckCircle2 size={16} /> Why this may work
          </h4>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            {result.why.map((reason, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>{reason}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Fit & Fabric Considerations */}
      {result.considerations && result.considerations.length > 0 && (
        <div>
          <h4 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Info size={16} color="var(--color-brand-primary)" /> Key Considerations
          </h4>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {result.considerations.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Signature: What Innerly Can't Tell You */}
      {result.cannotDetermine && result.cannotDetermine.length > 0 && (
        <div style={{ borderTop: '1px dashed var(--color-border-subtle)', paddingTop: 'var(--space-sm)' }}>
          <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <HelpCircle size={14} color="var(--color-text-muted)" /> What Innerly can't determine from this info:
          </h4>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            {result.cannotDetermine.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};
