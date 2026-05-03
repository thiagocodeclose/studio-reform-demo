'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useKorivaElement } from '@/hooks/useKorivaElement';
import { useSiteData } from '@/components/SiteDataProvider';

const headline = ['Precision.', 'Sculpted.', 'You.'];

export function HeroSection() {
  
  const siteData = typeof useSiteData === 'function' ? useSiteData() : null;

  const eyebrow = useKorivaElement('hero_eyebrow',
    { content: 'STUDIO REFORM', visible: true },
    { section: 'Hero', label: 'Eyebrow', type: 'eyebrow' });

  const hl1 = useKorivaElement('hero_headline_1',
    { content: 'Studio Reform', visible: true },
    { section: 'Hero', label: 'Headline', type: 'text' });

  const tagline = useKorivaElement('hero_headline_2',
    { content: 'Precision in Every Movement', visible: true },
    { section: 'Hero', label: 'Tagline', type: 'text' });

  const subtitle = useKorivaElement('hero_subtitle',
    { content: 'Austin's premier Pilates and reformer studio.', visible: true },
    { section: 'Hero', label: 'Description', type: 'text' });

  const cta1 = useKorivaElement('hero_cta_primary',
    { content: 'Book Free Class', visible: true },
    { section: 'Hero', label: 'CTA Primary', type: 'button' });

  const cta2 = useKorivaElement('hero_cta_secondary',
    { content: 'View Schedule', visible: true },
    { section: 'Hero', label: 'CTA Secondary', type: 'button' });

  const heroBg = useKorivaElement('hero_bg',
    { content: '', mediaType: 'image', visible: true },
    { section: 'Hero', label: 'Background Image', type: 'image' });

return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden grain"
      style={{ backgroundColor: 'var(--bg-dark)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&q=85&auto=format&fit=crop"
          alt="Studio Reform — Pilates Reformer"
          fill
          priority
          className="object-cover object-center animate-slow-zoom"
          sizes="100vw"
        />
        {/* Dark overlay with blush tint from bottom-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.65) 50%, rgba(13,13,13,0.3) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 0% 100%, rgba(232,196,192,0.18) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pb-24 md:pb-32 pt-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div style={{ width: 32, height: 1, backgroundColor: 'var(--blush)' }} />
            <p className="eyebrow text-[var(--blush)]">Guadalupe St · Austin, Texas</p>
          </motion.div>

          {/* Headline — editorial layout */}
          <div className="overflow-hidden mb-3">
            {headline.map((word, i) => (
              <motion.div
                key={word}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <h1
                  className={`font-heading text-white leading-none block ${
                    i === 1 ? 'italic' : ''
                  }`}
                  style={{
                    fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                    color: i === 1 ? 'var(--blush)' : undefined,
                  }}
                >
                  {word}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <p
              className="font-body text-white/50 max-w-sm leading-relaxed"
              style={{ fontSize: '0.9rem' }}
            >
              Reformer Pilates, Barre & Sculpt. Science-backed training that builds
              the body you want — and the strength you never expected.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#pricing" className="btn-primary">
                First Class Free
              </Link>
              <Link href="#classes" className="btn-ghost-white">
                View Schedule
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-0 right-0 hidden md:flex"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          {[
            { n: '1,200+', label: 'Members' },
            { n: '35+', label: 'Weekly Classes' },
            { n: '4.9★', label: 'Google Rating' },
          ].map(({ n, label }) => (
            <div
              key={label}
              className="px-8 py-5 text-center"
              style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className="font-heading text-white text-xl">{n}</p>
              <p className="font-body text-white/30 text-xs tracking-widest uppercase mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
