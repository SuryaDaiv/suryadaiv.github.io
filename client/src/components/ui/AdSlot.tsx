import React, { useEffect } from 'react';
import clsx from 'clsx';

type AdSlotProps = {
  position: string;
  className?: string;
  label?: string;
  height?: number;
};

/**
 * Lightweight AdSense-ready placeholder.
 * Uses the position key so the ad script can target slots later,
 * while keeping a graceful placeholder in development.
 */
export default function AdSlot({ position, className, label = 'Sponsored', height = 120 }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // silently ignore if ads script isn't loaded
    }
  }, []);

  return (
    <div
      className={clsx(
        'ad-shell flex flex-col gap-2 justify-center items-start text-sm leading-snug',
        className,
      )}
      data-ad-position={position}
      style={{ minHeight: height }}
      aria-label={label}
    >
      <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
      <div className="w-full h-[1px] bg-[var(--color-border)]"></div>
      <div className="text-[13px] text-slate-600">
        Ad placeholder for <strong>{position}</strong>. Replace with AdSense code.
      </div>
    </div>
  );
}
