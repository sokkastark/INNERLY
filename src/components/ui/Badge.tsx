import React from 'react';
import { RelevanceTier } from '../../domain/models/recommendation';

interface BadgeProps {
  tier?: RelevanceTier;
  label?: string;
  variant?: 'neutral' | 'accent';
}

export const Badge: React.FC<BadgeProps> = ({ tier, label, variant = 'neutral' }) => {
  if (tier) {
    const tierConfig: Record<RelevanceTier, { text: string; bg: string; color: string }> = {
      highly_relevant: {
        text: 'Highly Relevant',
        bg: 'var(--color-bg-tier-recommended)',
        color: 'var(--color-tier-recommended)'
      },
      good_option: {
        text: 'Good Option',
        bg: 'var(--color-bg-tier-good)',
        color: 'var(--color-tier-good)'
      },
      may_work: {
        text: 'May Work Depending on Fit',
        bg: 'var(--color-bg-tier-conditional)',
        color: 'var(--color-tier-conditional)'
      },
      less_relevant: {
        text: 'Less Relevant to this Situation',
        bg: 'var(--color-bg-subtle)',
        color: 'var(--color-text-muted)'
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
