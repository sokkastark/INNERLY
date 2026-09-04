import React from 'react';
import { Sparkles, Heart, ShieldCheck, HelpCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface HomeRouteProps {
  onNavigate: (tab: string) => void;
}

export const HomeRoute: React.FC<HomeRouteProps> = ({ onNavigate }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border-subtle)', padding: 'var(--space-xl) 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-brand-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Innerwear Knowledge & Decision Support
          </span>
          <h1 style={{ fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)', lineHeight: 1.25 }}>
            Start from what you know. Decide with confidence.
          </h1>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>
            Innerly helps you understand what works underneath what you're wearing — fits, fabrics, and comfort without dark patterns or commercial pressures.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <Button variant="primary" size="md" onClick={() => onNavigate('match')} style={{ width: '100%', maxWidth: '240px' }}>
              <ShieldCheck size={18} style={{ marginRight: '8px' }} /> Match My Outfit
            </Button>
            <Button variant="outline" size="md" onClick={() => onNavigate('explore')} style={{ width: '100%', maxWidth: '240px' }}>
              <Sparkles size={18} style={{ marginRight: '8px' }} /> Explore Knowledge
            </Button>
          </div>
        </div>
      </section>

      {/* Guided Discovery Cards */}
      <section className="container">
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-xs)' }}>Start from what you know</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
            Choose any entry point to explore innerwear principles at your own pace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Match My Outfit */}
          <div
            className="card-surface"
            onClick={() => onNavigate('match')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--font-size-base)', marginBottom: '4px' }}>Match My Outfit</h3>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Select a garment (Saree, Kurti, T-Shirt, Bodycon) and occasion to discover what works underneath.
              </p>
            </div>
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: 'auto' }}>
              Start Matcher →
            </span>
          </div>

          {/* Card 2: Explore Types */}
          <div
            className="card-surface"
            onClick={() => onNavigate('explore')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={20} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--font-size-base)', marginBottom: '4px' }}>Explore Types</h3>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Learn what different bra and panty types exist, how they are constructed, and where they perform best.
              </p>
            </div>
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: 'auto' }}>
              Browse Taxonomy →
            </span>
          </div>

          {/* Card 3: Know My Body */}
          <div
            className="card-surface"
            onClick={() => onNavigate('body')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={20} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--font-size-base)', marginBottom: '4px' }}>Know My Body</h3>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Progressive beginner-first guide to breast shape, tissue distribution, and posture comfort.
              </p>
            </div>
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: 'auto' }}>
              Body Awareness →
            </span>
          </div>

          {/* Card 4: Troubleshoot Issues */}
          <div
            className="card-surface"
            onClick={() => onNavigate('learn')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle size={20} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--font-size-base)', marginBottom: '4px' }}>Solve Fit Issues</h3>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Understand strap slipping, visible seam lines, underwire dig-in, or heat chafing.
              </p>
            </div>
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: 'auto' }}>
              Troubleshoot →
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
