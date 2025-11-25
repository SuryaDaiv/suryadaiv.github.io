import React from 'react';
import clsx from 'clsx';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl border border-[var(--color-border)] shadow-[0_20px_45px_-24px_rgba(15,23,42,0.35)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={clsx('p-6', className)}>{children}</div>;
}
