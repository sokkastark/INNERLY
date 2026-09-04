import React from 'react';
import { Compass, ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';

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
    <header
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        {/* Brand Identity */}
        <div
          onClick={() => onSelectTab('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--font-size-2xl)',
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

        {/* Primary Navigation */}
        <nav style={{ display: 'flex', gap: 'var(--space-xs)' }}>
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
  );
};
