'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { koriva } from '@/lib/site-data';
import { useKorivaElement } from '@/hooks/useKorivaElement';

export function CTASection() {
  
  const ctaEyebrow = useKorivaElement('cta_eyebrow',
    { content: 'Get Started', visible: true },
    { section: 'CTA', label: 'Eyebrow', type: 'eyebrow' });

  const ctaHeadline = useKorivaElement('cta_headline',
    { content: 'Book Free Class at Studio Reform', visible: true },
    { section: 'CTA', label: 'Headline', type: 'text' });

  const ctaSubtitle = useKorivaElement('cta_subtitle',
    { content: 'No commitment. Just results.', visible: true },
    { section: 'CTA', label: 'Subtitle', type: 'text' });

const [iframeHeight, setIframeHeight] = useState(320);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== koriva.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'lead') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${koriva.baseUrl}/widgets/lead/${koriva.gymSlug}?embed=1&cg_primary=E8C4C0&cg_bg=0D0D0D&cg_text=F7F3F0&cg_radius=0&cg_mode=dark`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden grain"
      style={{ backgroundColor: 'var(--bg-dark)' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&q=50&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(232,196,192,0.15) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 py-32 md:py-44">
        <div className="container-tight text-center">
          <Reveal>
            <p className="eyebrow text-[var(--blush)] mb-8" {...ctaEyebrow.editProps}>{ctaEyebrow.content || "Begin Today"}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}
             {...ctaHeadline.editProps}>
              Your First Class
              <br />
              <span className="italic" style={{ color: 'var(--blush)' }}>
                Is Free
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="mx-auto mb-10"
              style={{ width: 40, height: 1, backgroundColor: 'var(--blush)' }}
            />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="font-body text-white/40 max-w-sm mx-auto text-sm leading-relaxed mb-14" {...ctaSubtitle.editProps}>{ctaSubtitle.content || "No credit card. No commitment. Just the best reformer class you have ever taken."}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="max-w-lg mx-auto">
              <iframe
                src={src}
                title="Book Free Class at Studio Reform"
                className="koriva-widget-frame"
                style={{ height: `${iframeHeight}px` }}
                allow="clipboard-write"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="font-body text-white/20 text-xs mt-8 tracking-wide">
              No spam. Unsubscribe at any time.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
