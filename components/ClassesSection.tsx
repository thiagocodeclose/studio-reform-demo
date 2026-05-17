'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { garrison365 } from '@/lib/site-data';

const classTypes = [
  { name: 'Classical Reformer', desc: 'The original — spring-loaded resistance, full-body precision.' },
  { name: 'Barre Fusion', desc: 'Ballet-inspired isometric holds for long, lean muscles.' },
  { name: 'Hot Sculpt', desc: 'Pilates meets light weights in a warm room.' },
  { name: 'Mat Flow', desc: 'Floor-based core work, no equipment required.' },
  { name: 'Stretch & Recovery', desc: 'Fascia release and mobility. Essential for every body.' },
];

export function ClassesSection() {
  const [iframeHeight, setIframeHeight] = useState(500);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== garrison365.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'classes') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${garrison365.baseUrl}/widgets/classes/${garrison365.gymSlug}?embed=1&cg_primary=E8C4C0&cg_bg=F7F3F0&cg_text=0D0D0D&cg_radius=0&cg_mode=light`;

  return (
    <section id="classes" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">The Method</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-heading text-ink leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Find Your
                <br />
                <span className="italic" style={{ color: 'var(--rose)' }}>
                  Practice
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="divider-left divider mt-6 mb-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-muted leading-relaxed text-sm max-w-xs">
                Five distinct formats, one philosophy: move with precision, recover with intention,
                and build a body that lasts.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {classTypes.map((c, i) => (
                <Reveal key={c.name} delay={0.25 + i * 0.06}>
                  <div
                    className="flex gap-4 pb-5"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <span
                      className="font-body text-xs tracking-widest shrink-0 pt-0.5"
                      style={{ color: 'var(--blush)', minWidth: 24 }}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <p className="font-heading text-ink text-base font-semibold">{c.name}</p>
                      <p className="font-body text-muted text-xs mt-1 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} direction="left">
            <div>
              <p
                className="font-body text-xs tracking-widest uppercase mb-4"
                style={{ color: 'var(--rose)' }}
              >
                Live Schedule
              </p>
              <iframe
                src={src}
                title="Studio Reform Class Schedule"
                className="garrison365-widget-frame"
                style={{ height: `${iframeHeight}px` }}
                allow="clipboard-write"
                loading="lazy"
              />
              <div className="mt-4 text-right">
                <a
                  href="#pricing"
                  className="font-body text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors"
                >
                  View All Classes →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
