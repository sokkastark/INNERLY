import React from 'react';
import { Heart, Info, CheckCircle2 } from 'lucide-react';

export const BodyRoute: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      <div>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-xs)' }}>Know My Body & Comfort</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Understanding breast tissue distribution, root width, and hip structure helps eliminate dig-in, shifting, and pressure points.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3">
        {/* Breast Shape & Root Width */}
        <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <Heart size={24} color="var(--color-brand-primary)" />
            <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Breast Tissue & Root Width</h3>
          </div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Tissue fullness can be concentrated at the bottom, top, or evenly distributed. Root width determines how wide your bra cups should sit on your ribcage.
          </p>
          <div style={{ backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)' }}>
            <h4 style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-brand-primary)' }}>Fit Checkpoint:</h4>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              If underwires dig into side tissue, choose a bra with a wider wire arch or a soft wireless full-coverage band.
            </p>
          </div>
        </article>

        {/* Hip Rise & Waist Height */}
        <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <Info size={24} color="var(--color-brand-primary)" />
            <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Hip Rise & Waist Banding</h3>
          </div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Waist rise preferences depend on torso length and outer garment waistlines (e.g. saree petticoat vs low-rise jeans).
          </p>
          <div style={{ backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)' }}>
            <h4 style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-brand-primary)' }}>Fit Checkpoint:</h4>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              High-waist briefs align comfortably beneath petticoat drawstrings to prevent rolling and skin friction.
            </p>
          </div>
        </article>

        {/* Posture & Shoulder Weight */}
        <article className="card-surface" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <CheckCircle2 size={24} color="var(--color-brand-primary)" />
            <h3 style={{ fontSize: 'var(--font-size-lg)' }}>Band Support & Posture</h3>
          </div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Over 80% of bust support must be anchored by the underbust band, not shoulder straps. Tightening straps to compensate for a loose band causes shoulder grooves.
          </p>
          <div style={{ backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)' }}>
            <h4 style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-brand-primary)' }}>Fit Checkpoint:</h4>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              The bra band should sit firm and horizontal around your ribcage without riding up the back.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
