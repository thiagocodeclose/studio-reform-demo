'use client';

import { Reveal } from '@/components/Reveal';

const press = [
  { name: 'Shape', tag: 'Best Pilates Studio in Austin' },
  { name: 'Austin American-Statesman', tag: 'City\'s Favorite Studio' },
  { name: 'Well+Good', tag: 'Top Reformer Studios 2024' },
  { name: 'Refinery29', tag: 'Best Barre in Texas' },
  { name: 'mindbodygreen', tag: 'Studio of the Year' },
];

export function PressSection() {
  return (
    <section
      className="py-20"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-off)' }}
    >
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow text-center mb-12" style={{ color: 'var(--blush)' }}>
            As Seen In
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {press.map((p, i) => (
            <Reveal key={p.name} delay={0.05 * i}>
              <div
                className="flex flex-col items-center justify-center gap-2 py-10 px-6 text-center group transition-colors duration-300"
                style={{ backgroundColor: 'var(--bg-off)' }}
              >
                <span
                  className="font-heading transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)',
                    color: 'var(--muted)',
                  }}
                >
                  {p.name}
                </span>
                <span
                  className="font-body text-xs tracking-wide"
                  style={{ color: 'var(--blush)', opacity: 0.8 }}
                >
                  {p.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
