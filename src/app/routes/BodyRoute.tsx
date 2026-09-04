import React, { useState } from 'react';
import { Heart, Info, CheckCircle2, BookOpen } from 'lucide-react';

export const BodyRoute: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="container" style={{ paddingTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      {/* Header */}
      <div>
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Body Awareness & Fit Education
        </span>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', marginTop: '4px', marginBottom: 'var(--space-xs)' }}>
          Understanding How Your Body Interacts with Fit
        </h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Learn how natural tissue distribution, waist rises, and ribcage structure affect comfort — without needing prior technical jargon.
        </p>
      </div>

      {/* 3-Step Progressive Learning Navigation */}
      <div style={{ display: 'flex', gap: 'var(--space-xs)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-md)' }}>
        <button
          onClick={() => setActiveStep(1)}
          style={{
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: activeStep === 1 ? 600 : 400,
            backgroundColor: activeStep === 1 ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
            color: activeStep === 1 ? '#FFFFFF' : 'var(--color-text-primary)'
          }}
        >
          Step 1: How Your Body Is Shaped
        </button>
        <button
          onClick={() => setActiveStep(2)}
          style={{
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: activeStep === 2 ? 600 : 400,
            backgroundColor: activeStep === 2 ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
            color: activeStep === 2 ? '#FFFFFF' : 'var(--color-text-primary)'
          }}
        >
          Step 2: Why Does This Matter?
        </button>
        <button
          onClick={() => setActiveStep(3)}
          style={{
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: activeStep === 3 ? 600 : 400,
            backgroundColor: activeStep === 3 ? 'var(--color-brand-primary)' : 'var(--color-bg-subtle)',
            color: activeStep === 3 ? '#FFFFFF' : 'var(--color-text-primary)'
          }}
        >
          Step 3: Fit Concepts & Terminology
        </button>
      </div>

      {/* Step 1: Beginner-First Body Observations */}
      {activeStep === 1 && (
        <div className="grid sm:grid-cols-1 lg:grid-cols-3">
          <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <Heart size={22} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Bust Position & Fullness</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Tissue may sit higher or lower on the chest wall, with fullness concentrated towards the bottom, top, or sides.
            </p>
          </article>

          <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <Info size={22} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Ribcage & Underband Anchor</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              The underband provides much of the bra's structural support. Shoulder straps mainly help keep the cups positioned flush on the body.
            </p>
          </article>

          <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <CheckCircle2 size={22} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Waistline & Torso Rise</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Torso length determines where underwear waistbands sit relative to outer garments like saree petticoats or high-rise trousers.
            </p>
          </article>
        </div>
      )}

      {/* Step 2: Why Does This Matter? */}
      {activeStep === 2 && (
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-brand-primary)' }}>Why Body Awareness Improves Fit Comfort</h2>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Two people with the exact same bra size (such as 34B) may have completely different comfort experiences in the same bra model. Cup depth, wire curvature, and gore height interact differently depending on whether your tissue is self-supporting, projected, or wide-rooted.
          </p>
          <div style={{ backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)' }}>
            <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>Key Innerly Principle:</h4>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              Your body is unique. Innerly points out considerations to help you choose cup cuts that align with your natural shape — never forcing rigid rules.
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Technical Terminology Introduced Gradually */}
      {activeStep === 3 && (
        <div className="grid sm:grid-cols-1 lg:grid-cols-3">
          <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <BookOpen size={20} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Root Width</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Refers to how far tissue extends across your chest toward your underarm. Wider roots may feel more comfortable in wide underwire arches or wireless cups.
            </p>
          </article>

          <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <BookOpen size={20} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Tissue Distribution</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Describes where volume sits (top-heavy, bottom-heavy, or evenly spread). Bottom-heavy tissue often suits demi or plunge cuts, while full-on-top tissue fills balconettes smoothly.
            </p>
          </article>

          <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <BookOpen size={20} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Center Gore Height</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              The center piece connecting bra cups. Close-set breasts often prefer low center gores to avoid wire resting on breast tissue.
            </p>
          </article>
        </div>
      )}
    </div>
  );
};
