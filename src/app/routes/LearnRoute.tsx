import React from 'react';
import { FIT_PROBLEMS } from '../../data/problems';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export const LearnRoute: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      <div>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-xs)' }}>Troubleshoot & Learn</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Practical educational guides to diagnose common fit discomforts, seam lines, and strap issues.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        {FIT_PROBLEMS.map((problem) => (
          <article key={problem.id} className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <AlertTriangle size={20} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: 'var(--font-size-lg)' }}>{problem.title}</h3>
            </div>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              <strong>Symptom:</strong> {problem.symptom}
            </p>

            <div>
              <h4 style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                Possible Causes:
              </h4>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                {problem.possibleCauses.map((c: string, i: number) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)' }}>
              <h4 style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                <CheckCircle size={14} /> Recommended Action Steps:
              </h4>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-text-primary)' }}>
                {problem.checkpoints.map((cp: string, i: number) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{cp}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
