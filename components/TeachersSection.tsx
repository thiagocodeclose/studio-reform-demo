'use client';

import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { Instagram } from 'lucide-react';
import { instructors } from '@/lib/site-data';

export function TeachersSection() {
  return (
    <section id="teachers" className="section-padding" style={{ backgroundColor: 'var(--bg-pearl)' }}>
      <div className="container-wide">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-4">The Instructors</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-ink"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Trained to{' '}
              <span className="italic" style={{ color: 'var(--rose)' }}>
                Transform
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="divider" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-muted text-sm max-w-md mx-auto leading-relaxed">
              Every Studio Reform instructor is certified by the Pilates Method Alliance and
              holds additional specializations in anatomy, movement assessment, and coaching.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {instructors.map((instructor, i) => (
            <Reveal key={instructor.name} delay={0.1 + i * 0.1}>
              <article className="group">
                <div
                  className="relative overflow-hidden mb-6"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Blush overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(232,196,192,0.4) 0%, transparent 60%)',
                    }}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={instructor.instagram}
                      className="flex items-center justify-center w-9 h-9"
                      style={{ backgroundColor: 'var(--bg)', borderRadius: 0 }}
                      aria-label={`${instructor.name} on Instagram`}
                    >
                      <Instagram size={14} color="var(--ink)" />
                    </a>
                  </div>
                  <div
                    className="absolute bottom-4 left-4"
                    style={{
                      backgroundColor: 'var(--blush)',
                      color: 'var(--ink)',
                      padding: '2px 10px',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {instructor.years}y Teaching
                  </div>
                </div>

                <p className="eyebrow mb-2">{instructor.specialty}</p>
                <h3 className="font-heading text-ink text-2xl font-semibold">{instructor.name}</h3>
                <p className="font-body text-muted text-xs tracking-wide uppercase mt-1 mb-3">{instructor.role}</p>
                <p className="font-body text-muted text-sm leading-relaxed">{instructor.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
