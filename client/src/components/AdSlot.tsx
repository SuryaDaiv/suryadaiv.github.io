import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type Props = {
  slot: string;
  format?: string;
  layout?: string;
  className?: string;
  // Optional inline style to reserve space and avoid layout shift
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: React.CSSProperties;
};

export default function AdSlot({
  slot,
  format = 'auto',
  layout,
  className,
  style,
}: Props) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore if adsbygoogle is not yet available
    }
  }, [slot]);

  return (
    <ins
      className={`adsbygoogle block ${className ?? ''}`}
      style={{ display: 'block', ...style }}
      data-ad-client="ca-pub-6763408721406920"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
      {...(layout ? { 'data-ad-layout': layout } : {})}
    ></ins>
  );
}
