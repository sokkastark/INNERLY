import React from 'react';
import { Sparkles, Heart, ShieldCheck, HelpCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface HomeRouteProps {
  onNavigate: (tab: string) => void;
}

export const HomeRoute: React.FC<HomeRouteProps> = ({ onNavigate }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border-subtle)', padding: 'var(--space-2xl) 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-brand-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Innerwear Knowledge & Decision Support
          </span>
          <h1 style={{ fontSize: 'var(--font-size-3xl)', marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)', lineHeight: 1.2 }}>
            Start from what you know. Decide with confidence.
          </h1>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)', lineHeight: 1.6 }}>
            Innerly helps you understand fits, fabrics, outerwear compatibility, and comfort — without dark patterns, forced popups, or shopping pressures.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate('match')}>
              <ShieldCheck size={18} style={{ marginRight: '8px' }} /> Match My Outfit
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('explore')}>
              <Sparkles size={18} style={{ marginRight: '8px' }} /> Explore Knowledge
            </Button>
          </div>
        </div>
      </section>

      {/* Guided Discovery Cards: Start from what you know */}
      <section className="container">
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-xs)' }}>Start from what you know</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Choose any entry point to explore innerwear principles at your own pace.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Match My Outfit */}
          <div
            className="card-surface"
            onClick={() => onNavigate('match')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={24} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '4px' }}>Match My Outfit</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Select a garment (Saree, Kurti, T-Shirt, Bodycon) and occasion to discover ideal innerwear types with clear explanations.
              </p>
            </div>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: 'auto' }}>
              Start Matcher →
            </span>
          </div>

          {/* Card 2: Explore Bras & Panties */}
          <div
            className="card-surface"
            onClick={() => onNavigate('explore')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={24} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '4px' }}>Explore Types</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Learn what different bra and panty types exist, why they were designed, and where they perform best.
              </p>
            </div>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: 'auto' }}>
              Browse Taxonomy →
            </span>
          </div>

          {/* Card 3: Know My Body */}
          <div
            className="card-surface"
            onClick={() => onNavigate('body')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={24} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '4px' }}>Know My Body</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Understand breast shapes, tissue distribution, and hip rises to select pressure-free options.
              </p>
            </div>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: 'auto' }}>
              Body Awareness →
            </span>
          </div>

          {/* Card 4: Troubleshoot Problems */}
          <div
            className="card-surface"
            onClick={() => onNavigate('learn')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle size={24} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '4px' }}>Solve Fit Issues</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Troubleshoot strap slipping, visible seam lines, underwire dig-in, or heat chafing.
              </p>
            </div>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: 'auto' }}>
              Troubleshoot →
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
