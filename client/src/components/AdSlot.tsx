import { useEffect } from 'react';

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
};

export default function AdSlot({
  slot,
  format = 'auto',
  layout,
  className,
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
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6763408721406920"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
      {...(layout ? { 'data-ad-layout': layout } : {})}
    ></ins>
  );
}
