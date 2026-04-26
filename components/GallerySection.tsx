import Image from 'next/image';
import { Reveal } from '@/components/Reveal';

export function GallerySection() {
  return (
    <section id="studio" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">The Space</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-heading text-ink"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                Designed for{' '}
                <span className="italic" style={{ color: 'var(--rose)' }}>
                  Precision
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="font-body text-muted text-sm max-w-xs leading-relaxed">
              20 Balanced Body Reformers. Signature barre installation. 
              Natural light, warm wood, and zero distractions.
            </p>
          </Reveal>
        </div>

        {/* Gallery grid — asymmetric */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-3">
          {/* Tall left — spans 5 col, 2 rows */}
          <Reveal className="col-span-2 md:col-span-5 md:row-span-2">
            <div className="relative overflow-hidden h-full min-h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=85&auto=format&fit=crop"
                alt="Reformer Pilates class"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 42vw"
              />
            </div>
          </Reveal>

          {/* Two portrait right — span 7 col each */}
          <Reveal delay={0.1} className="md:col-span-7">
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=85&auto=format&fit=crop"
                alt="Barre class"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="58vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7">
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85&auto=format&fit=crop"
                alt="Mat Pilates"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="58vw"
              />
            </div>
          </Reveal>

          {/* Full-width panoramic */}
          <Reveal delay={0.2} className="col-span-2 md:col-span-12">
            <div className="relative overflow-hidden" style={{ aspectRatio: '21/6' }}>
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&q=80&auto=format&fit=crop"
                alt="Studio Reform — Austin TX"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to right, rgba(13,13,13,0.65) 0%, transparent 50%)',
                }}
              />
              <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2">
                <p
                  className="font-heading text-white italic"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2.8rem)' }}
                >
                  "Designed to make you better."
                </p>
                <p className="font-body text-white/40 text-xs tracking-widest uppercase mt-2">
                  2818 Guadalupe St · Austin, Texas
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
