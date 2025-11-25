import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
  padded?: boolean;
};

export default function Layout({ children, padded = true }: Props) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <Navbar />
      <main className={padded ? 'max-w-6xl mx-auto px-4' : ''}>{children}</main>
      <Footer />
    </div>
  );
}
