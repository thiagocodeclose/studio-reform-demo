import Image from 'next/image';
import { Reveal } from '@/components/Reveal';

export function ManifestoSection() {
  return (
    <section
      className="relative section-padding overflow-hidden grain"
      style={{ backgroundColor: 'var(--bg-dark)' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=50&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />

      {/* Decorative large text */}
      <div
        className="absolute right-0 top-0 font-heading text-white pointer-events-none select-none hidden md:block"
        style={{
          fontSize: '28vw',
          lineHeight: 0.85,
          opacity: 0.03,
          letterSpacing: '-0.04em',
        }}
      >
        SR
      </div>

      <div className="relative z-10 container-wide">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div style={{ width: 32, height: 1, backgroundColor: 'var(--blush)' }} />
              <p className="eyebrow text-[var(--blush)]">The Philosophy</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote
              className="font-heading text-white italic leading-tight mb-10"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
            >
              "Your body is not a problem to fix.
              <br />
              It is a machine to{' '}
              <span style={{ color: 'var(--blush)' }}>master.</span>"
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-body text-white/40 leading-relaxed max-w-lg text-sm">
              Studio Reform was founded on a single principle: that precision-based movement,
              practiced consistently, produces results that no trendy workout ever will.
              We do not do shortcuts. We do the work.
            </p>
          </Reveal>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-px mt-20" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
          {[
            {
              num: '01',
              title: 'The Reformer',
              body: 'Spring resistance activates stabilizing muscles that machines and free weights ignore. The result is a transformation that shows in how you move, not just how you look.',
            },
            {
              num: '02',
              title: 'The Precision',
              body: 'We count reps, control range of motion, and cue breath in every class. Sloppy movement builds nothing. Precise movement builds everything.',
            },
            {
              num: '03',
              title: 'The Space',
              body: 'Studio Reform was designed to be the most beautiful place you\'ve ever exercised. Because your environment shapes your results.',
            },
          ].map(({ num, title, body }, i) => (
            <Reveal key={num} delay={0.3 + i * 0.1}>
              <div className="p-8 md:p-10" style={{ backgroundColor: 'rgba(13,13,13,0.5)' }}>
                <p
                  className="font-body text-xs tracking-widest mb-4"
                  style={{ color: 'var(--blush)' }}
                >
                  {num}
                </p>
                <p className="font-heading text-white text-xl font-semibold mb-3">{title}</p>
                <p className="font-body text-white/35 text-sm leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
