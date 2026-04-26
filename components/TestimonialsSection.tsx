import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { testimonials } from '@/lib/site-data';

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-tight">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-4">Results</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-ink"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              What Our Members{' '}
              <span className="italic" style={{ color: 'var(--rose)' }}>
                Say
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="divider" />
          </Reveal>
        </div>

        <div className="space-y-0">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <div
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 py-12 border-t border-[var(--border)] ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="shrink-0">
                  <div className="relative w-16 h-16 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover grayscale"
                      sizes="64px"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className="font-heading leading-none mb-4"
                    style={{ fontSize: '4rem', lineHeight: 0.7, color: 'var(--blush)', opacity: 0.6 }}
                  >
                    "
                  </div>
                  <blockquote
                    className="font-heading text-ink italic mb-6"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', lineHeight: 1.3 }}
                  >
                    {t.quote}
                  </blockquote>
                  <p className="font-body text-ink font-semibold text-sm">{t.name}</p>
                  <p className="font-body text-muted text-xs tracking-wide mt-1">{t.title}</p>
                  <div className="flex gap-0.5 mt-2" style={{ color: 'var(--rose)', fontSize: '0.65rem' }}>
                    {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div
            className="border-t border-[var(--border)] pt-12 text-center"
          >
            <p className="font-heading text-ink italic" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}>
              "Your best body starts with one class."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
