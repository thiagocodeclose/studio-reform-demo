'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useSiteData } from '@/components/SiteDataProvider';
import { useGarrison365Element } from '@/hooks/useGarrison365Element';

const navLinks = [
  { label: 'Classes', href: '#classes' },
  { label: 'Instructors', href: '#teachers' },
  { label: 'Studio', href: '#studio' },
  { label: 'Pricing', href: '#pricing' },
];

export function Header() {
  
  const logoText = useGarrison365Element('nav_logo_text',
    { content: 'STUDIO REFORM', visible: true },
    { section: 'Header', label: 'Logo Text', type: 'text' });

  const navCta = useGarrison365Element('nav_cta',
    { content: 'Book Free Class', visible: true },
    { section: 'Header', label: 'Nav CTA', type: 'button' });

const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [integrations, setIntegrations] = useState<{
    booking_enabled: boolean;
    portal_enabled: boolean;
    booking_url: string;
    portal_url: string;
  }>({
    booking_enabled: false,
    portal_enabled: false,
    booking_url: '#',
    portal_url: '#',
  });
  const siteData = useSiteData();
  const gymName = siteData?.gym?.name?.toUpperCase() || 'STUDIO REFORM';
  const logoUrl = siteData?.brand?.logo_url;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleBrand(e: Event) {
      const d = (e as CustomEvent).detail as Record<string, unknown>;
      if (d.booking_enabled !== undefined || d.portal_enabled !== undefined || d.gym_slug !== undefined) {
        const slug = (d.gym_slug as string) || '';
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.codegyms.com';
        setIntegrations({
          booking_enabled: !!(d.booking_enabled),
          portal_enabled: !!(d.portal_enabled),
          booking_url: slug ? `${baseUrl}/schedule/${slug}` : '#',
          portal_url: (d.portal_url as string) || (slug ? `${baseUrl}/member-login/${slug}` : '#'),
        });
      }
    }
    window.addEventListener('garrison365:brand', handleBrand);
    return () => window.removeEventListener('garrison365:brand', handleBrand);
  }, []);
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: scrolled ? 'rgba(247,243,240,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            {logoUrl ? (
              <img src={logoUrl} alt={gymName} className="h-8 w-auto object-contain" />
            ) : (
              <span
                className="font-heading tracking-wider"
                style={{
                  fontSize: '1.15rem',
                  color: scrolled ? 'var(--ink)' : 'white',
                  transition: 'color 0.4s',
                }}
              >
                {gymName}
              </span>
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.55)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="{integrations.booking_enabled ? integrations.booking_url : \'#pricing\'}" className="btn-primary">
              Free Class
            </Link>
            {integrations.portal_enabled && (
              <a
                href={integrations.portal_url}
                className="font-body text-xs tracking-widest uppercase transition-colors"
                style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '0.5rem 0.75rem' }}
              >
                Member Login
              </a>
            )}
          </div>

          <button
            className="md:hidden transition-colors"
            style={{ color: scrolled ? 'var(--ink)' : 'white' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div className="container-wide py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-xs tracking-widest uppercase text-muted hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link href="{integrations.booking_enabled ? integrations.booking_url : \'#pricing\'}" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 text-center">
              Free Class
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
