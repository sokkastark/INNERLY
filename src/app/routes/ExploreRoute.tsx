import React, { useState } from 'react';
import { BRA_TYPES } from '../../data/bras';
import { PANTY_TYPES } from '../../data/panties';
import { Badge } from '../../components/ui/Badge';

export const ExploreRoute: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'bras' | 'panties'>('bras');

  return (
    <div className="container" style={{ paddingTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      <div>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-xs)' }}>Explore Innerwear Knowledge</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Understand why different innerwear types exist, how they are constructed, and where they perform best.
        </p>
      </div>

      {/* Category Toggle */}
      <div style={{ display: 'flex', gap: 'var(--space-xs)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-md)' }}>
        <button
          onClick={() => setActiveCategory('bras')}
          style={{
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: activeCategory === 'bras' ? 600 : 400,
            backgroundColor: activeCategory === 'bras' ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
            color: activeCategory === 'bras' ? '#FFFFFF' : 'var(--color-text-primary)'
          }}
        >
          Bra Taxonomy
        </button>
        <button
          onClick={() => setActiveCategory('panties')}
          style={{
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: activeCategory === 'panties' ? 600 : 400,
            backgroundColor: activeCategory === 'panties' ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
            color: activeCategory === 'panties' ? '#FFFFFF' : 'var(--color-text-primary)'
          }}
        >
          Panty Taxonomy
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        {activeCategory === 'bras'
          ? BRA_TYPES.map((bra) => (
              <article key={bra.id} className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-brand-primary)' }}>{bra.name}</h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    {bra.shortDescription}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Badge label={`Coverage: ${bra.coverageLevel}`} />
                  <Badge label={`Support: ${bra.supportLevel}`} />
                  <Badge label={`Wire: ${bra.wireType}`} />
                </div>

                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBottom: '6px' }}>Key Characteristics:</h4>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    {bra.characteristics.map((c: string, i: number) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))
          : PANTY_TYPES.map((panty) => (
              <article key={panty.id} className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-brand-primary)' }}>{panty.name}</h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    {panty.shortDescription}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Badge label={`Coverage: ${panty.coverage}`} />
                  <Badge label={`Waist Rise: ${panty.waistRise}`} />
                  {panty.seamlessAvailable && <Badge label="Seamless Finish Available" variant="accent" />}
                </div>

                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBottom: '6px' }}>Key Features:</h4>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    {panty.characteristics.map((c: string, i: number) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
      </div>
    </div>
  );
};
