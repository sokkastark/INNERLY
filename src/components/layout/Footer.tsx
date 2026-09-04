import React from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg-subtle)',
        borderTop: '1px solid var(--color-border-subtle)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
        marginTop: 'var(--space-3xl)'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--font-size-xl)', color: 'var(--color-brand-primary)', marginBottom: '8px' }}>
              INNERLY
            </h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              An India-first educational and decision-support tool focused entirely on innerwear knowledge, body awareness, fit comfort, and outerwear compatibility.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="var(--color-brand-primary)" /> Education-First Philosophy
            </h4>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Innerly is strictly free of forced commercial popups, dark patterns, or intrusive advertising. Our recommendations are explainable, objective, and designed to help you decide independently.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HeartHandshake size={16} color="var(--color-brand-primary)" /> Privacy & Respect
            </h4>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Innerly does not collect unnecessary personal data or require account creation for decision support.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Innerly • Free Educational & Decision Support PWA
          </span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            Designed with Editorial Elegance & Respect
          </span>
        </div>
      </div>
    </footer>
  );
};
