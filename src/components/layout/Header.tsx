import React from 'react';
import { Compass, Sparkles, Heart, ShieldCheck, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'explore', label: 'Explore', icon: Sparkles },
    { id: 'body', label: 'Body', icon: Heart },
    { id: 'match', label: 'Match', icon: ShieldCheck },
    { id: 'learn', label: 'Learn', icon: BookOpen }
  ];

  return (
    <>
      {/* Top Header Bar */}
      <header
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          borderBottom: '1px solid var(--color-border-subtle)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
          {/* Brand Identity */}
          <div
            onClick={() => onSelectTab('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--color-brand-primary)'
              }}
            >
              INNERLY
            </span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', borderLeft: '1px solid var(--color-border-strong)', paddingLeft: '8px' }}>
              Knowledge & Fit
            </span>
          </div>

          {/* Desktop Top Navigation (Hidden on Mobile) */}
          <nav className="desktop-only" style={{ gap: 'var(--space-xs)' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
                    backgroundColor: isActive ? 'var(--color-bg-accent-soft)' : 'transparent',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <Icon size={16} color={isActive ? 'var(--color-brand-primary)' : 'var(--color-text-muted)'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile Fixed Bottom Navigation Bar (Hidden on Desktop) */}
      <nav
        className="mobile-only"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '64px',
          backgroundColor: 'var(--color-bg-surface)',
          borderTop: '1px solid var(--color-border-subtle)',
          zIndex: 1000,
          justifyContent: 'space-around',
          alignItems: 'center',
          boxShadow: '0 -4px 16px rgba(28, 25, 23, 0.05)'
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
                flex: 1,
                height: '100%',
                padding: '4px 0',
                color: isActive ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
                backgroundColor: 'transparent'
              }}
            >
              <Icon size={20} color={isActive ? 'var(--color-brand-primary)' : 'var(--color-text-muted)'} />
              <span style={{ fontSize: '11px', fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
