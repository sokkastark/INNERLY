import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-brand-primary)',
          color: '#FFFFFF',
          border: '1px solid transparent'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--color-bg-accent-soft)',
          color: 'var(--color-brand-primary)',
          border: '1px solid transparent'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border-strong)'
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: '6px 14px', fontSize: 'var(--font-size-sm)' };
      case 'md':
        return { padding: '10px 20px', fontSize: 'var(--font-size-base)' };
      case 'lg':
        return { padding: '14px 28px', fontSize: 'var(--font-size-lg)' };
    }
  };

  return (
    <button
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-md)',
        fontWeight: 500,
        transition: 'var(--transition-fast)',
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
};
