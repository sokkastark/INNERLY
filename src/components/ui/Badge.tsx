import React from 'react';
import { MatchTier } from '../../domain/models/recommendation';

interface BadgeProps {
  tier?: MatchTier;
  label?: string;
  variant?: 'neutral' | 'accent';
}

export const Badge: React.FC<BadgeProps> = ({ tier, label, variant = 'neutral' }) => {
  if (tier) {
    const tierConfig: Record<MatchTier, { text: string; bg: string; color: string }> = {
      recommended: {
        text: 'Recommended Consideration',
        bg: 'var(--color-bg-tier-recommended)',
        color: 'var(--color-tier-recommended)'
      },
      good_match: {
        text: 'Good Match',
        bg: 'var(--color-bg-tier-good)',
        color: 'var(--color-tier-good)'
      },
      conditional: {
        text: 'May Work Depending on Fit',
        bg: 'var(--color-bg-tier-conditional)',
        color: 'var(--color-tier-conditional)'
      },
      considerations: {
        text: 'Things to Consider',
        bg: 'var(--color-bg-tier-consideration)',
        color: 'var(--color-tier-consideration)'
      },
      not_ideal: {
        text: 'Not Ideal for this Context',
        bg: 'var(--color-bg-tier-not-ideal)',
        color: 'var(--color-tier-not-ideal)'
      }
    };

    const config = tierConfig[tier];

    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '4px 10px',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--font-size-xs)',
          fontWeight: 600,
          backgroundColor: config.bg,
          color: config.color
        }}
      >
        {config.text}
      </span>
    );
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 500,
        backgroundColor: variant === 'accent' ? 'var(--color-bg-accent-soft)' : 'var(--color-bg-subtle)',
        color: variant === 'accent' ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)'
      }}
    >
      {label}
    </span>
  );
};
