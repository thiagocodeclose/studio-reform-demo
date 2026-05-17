'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { garrison365 } from '@/lib/site-data';

export function PricingSection() {
  const [iframeHeight, setIframeHeight] = useState(520);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== garrison365.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'pricing') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${garrison365.baseUrl}/widgets/pricing/${garrison365.gymSlug}?embed=1&cg_primary=E8C4C0&cg_bg=EDE6E1&cg_text=0D0D0D&cg_radius=0&cg_mode=light`;

  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: 'var(--bg-pearl)' }}>
      <div className="container-tight">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-4">Membership</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-ink"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Invest in{' '}
              <span className="italic" style={{ color: 'var(--rose)' }}>
                Yourself
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="divider" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-muted text-sm max-w-md mx-auto leading-relaxed">
              No initiation fees. No annual contracts. Every plan includes unlimited access to
              our full class library.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <iframe
            src={src}
            title="Studio Reform Pricing"
            className="garrison365-widget-frame"
            style={{ height: `${iframeHeight}px` }}
            allow="clipboard-write"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {['✓ Cancel anytime', '✓ First class free', '✓ No initiation fee', '✓ Freeze available'].map(
              (item) => (
                <span key={item} className="font-body text-muted text-sm">
                  {item}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
