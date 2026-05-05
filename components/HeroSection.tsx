// @ts-nocheck
'use client';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useKorivaElement } from '@/hooks/useKorivaElement';
import { useSiteData } from '@/components/SiteDataProvider';

/**
 * STUDIO REFORM — Bento Grid Hero
 * Light theme: blush/cream (#FAFAFA bg, #C8A9A9 primary, #1E1E1E ink)
 * Reference: SLT NYC bento layout, Equinox precision aesthetic
 */
export function HeroSection() {

  const [bookingIntegration, setBookingIntegration] = useState<{
    booking_enabled: boolean;
    booking_url: string;
  }>({ booking_enabled: false, booking_url: '#' });
  const siteData = typeof useSiteData === 'function' ? useSiteData() : null;

  const eyebrow = useKorivaElement('hero_eyebrow', { content: 'STUDIO REFORM', visible: true }, { section: 'Hero', label: 'Eyebrow', type: 'eyebrow' });
  const hl1 = useKorivaElement('hero_headline_1', { content: 'Precision.\nSculpted.\nYou.', visible: true }, { section: 'Hero', label: 'Headline', type: 'text' });
  const tagline = useKorivaElement('hero_headline_2', { content: "Austin's premier reformer studio.", visible: true }, { section: 'Hero', label: 'Tagline', type: 'text' });
  const subtitle = useKorivaElement('hero_subtitle', { content: 'Small-group Pilates. Reformer. Barre. Zero excuses.', visible: true }, { section: 'Hero', label: 'Description', type: 'text' });
  const cta1 = useKorivaElement('hero_cta_primary', { content: 'Book Free Class', visible: true }, { section: 'Hero', label: 'CTA Primary', type: 'button' });
  const cta2 = useKorivaElement('hero_cta_secondary', { content: 'View Schedule', visible: true }, { section: 'Hero', label: 'CTA Secondary', type: 'button' });

  const imgA = useKorivaElement('hero_img_a', { content: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=85&auto=format&fit=crop', mediaType: 'image', visible: true }, { section: 'Hero', label: 'Main Image', type: 'image' });
  const imgB = useKorivaElement('hero_img_b', { content: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=85&auto=format&fit=crop', mediaType: 'image', visible: true }, { section: 'Hero', label: 'Secondary Image', type: 'image' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  useEffect(() => {
    function handleBrand(e: Event) {
      const d = (e as CustomEvent).detail as Record<string, unknown>;
      if (d.booking_enabled !== undefined || d.gym_slug !== undefined) {
        const slug = (d.gym_slug as string) || '';
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.codegyms.com';
        setBookingIntegration({
          booking_enabled: !!(d.booking_enabled),
          booking_url: slug ? `${baseUrl}/schedule/${slug}` : '#',
        });
      }
    }
    window.addEventListener('koriva:brand', handleBrand);
    return () => window.removeEventListener('koriva:brand', handleBrand);
  }, []);
  return (
    <section style={{ backgroundColor: 'var(--bg-cream, #FAFAFA)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Top eyebrow bar */}
      <motion.div {...fadeUp(0.1)} style={{ position: 'absolute', top: '1.75rem', left: '2rem', right: '2rem', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink, #1E1E1E)', fontFamily: 'var(--font-body)', opacity: 0.4 }}>{eyebrow.content}</span>
        <span style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary, #C8A9A9)', fontFamily: 'var(--font-body)' }}>Austin, TX</span>
      </motion.div>

      {/* Bento Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '58% 42%', gridTemplateRows: '60vh 40vh', minHeight: '100vh', gap: '3px', backgroundColor: 'var(--bg-cream, #FAFAFA)' }}>

        {/* Panel A: Large reformer image (spans 2 rows) */}
        <div style={{ gridColumn: '1', gridRow: '1 / 3', position: 'relative', overflow: 'hidden' }}>
          <motion.div initial={{ scale: 1.04 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'absolute', inset: 0 }}>
            <Image src={imgA.content} alt="Reformer Pilates at Studio Reform Austin" fill priority className="object-cover" style={{ objectPosition: 'center 30%' }} sizes="58vw" />
          </motion.div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(250,250,250,0.85) 0%, transparent 40%)' }} />
          <motion.div {...fadeUp(0.3)} style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '1rem' }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 5.5vw, 6.5rem)', lineHeight: 0.92, fontWeight: 400, color: 'var(--ink, #1E1E1E)', letterSpacing: '-0.04em', margin: 0 }}>
              {hl1.content.split('\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)}
            </h1>
          </motion.div>
        </div>

        {/* Panel B: Stats + accent image (top-right) */}
        <div style={{ gridColumn: '2', gridRow: '1', backgroundColor: 'var(--bg-blush, #F5EEEB)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <Image src={imgB.content} alt="Pilates reformer equipment" fill className="object-cover" style={{ objectPosition: 'center', opacity: 0.35 }} sizes="42vw" />
          </div>
          <motion.div {...fadeUp(0.45)} style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[['12', 'Max class size'], ['★ 4.9', 'Client rating'], ['6+', 'Disciplines']].map(([value, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', backgroundColor: 'rgba(250,250,250,0.82)', backdropFilter: 'blur(12px)', borderRadius: '4px', padding: '8px 12px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 2.2vw, 2rem)', fontWeight: 300, color: 'var(--primary, #C8A9A9)' }}>{value}</span>
                <span style={{ fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink, #1E1E1E)', opacity: 0.5, fontFamily: 'var(--font-body)' }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Panel D: CTA + tagline (bottom-right) */}
        <div style={{ gridColumn: '2', gridRow: '2', backgroundColor: 'var(--ink, #1E1E1E)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.75rem', gap: '1rem' }}>
          <motion.div {...fadeUp(0.55)}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(11px, 1.1vw, 14px)', lineHeight: 1.55, color: 'rgba(250,250,250,0.6)', margin: '0 0 0.25rem 0' }}>{subtitle.content}</p>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.85rem, 1.5vw, 1.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(200,169,169,0.9)', margin: 0 }}>{tagline.content}</p>
          </motion.div>
          <motion.div {...fadeUp(0.65)} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="{bookingIntegration.booking_enabled ? bookingIntegration.booking_url : \'#classes\'}" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '11px 20px', backgroundColor: 'var(--primary, #C8A9A9)', color: '#1E1E1E', borderRadius: '3px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{cta1.content}</Link>
            <Link href="#schedule" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px', backgroundColor: 'transparent', color: 'rgba(250,250,250,0.45)', border: '1px solid rgba(250,250,250,0.15)', borderRadius: '3px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{cta2.content}</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
