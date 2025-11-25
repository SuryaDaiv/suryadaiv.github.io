import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'span';
};

const sizeClasses = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-2.5',
  lg: 'text-base px-5 py-3',
};

const variantClasses = {
  primary:
    'bg-[var(--color-primary)] text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors',
  ghost: 'bg-transparent text-[var(--color-ink)] hover:bg-slate-100 transition-colors',
  outline:
    'border border-[var(--color-border)] text-[var(--color-ink)] hover:border-blue-200 hover:bg-blue-50',
  subtle: 'bg-slate-100 text-[var(--color-ink)] hover:bg-slate-200',
};

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  as = 'button',
  ...props
}: ButtonProps) {
  const Comp = as;
  return (
    <Comp
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
