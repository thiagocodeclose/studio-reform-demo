'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useSiteData } from '@/components/SiteDataProvider';
import { useKorivaElement } from '@/hooks/useKorivaElement';

const navLinks = [
  { label: 'Classes', href: '#classes' },
  { label: 'Instructors', href: '#teachers' },
  { label: 'Studio', href: '#studio' },
  { label: 'Pricing', href: '#pricing' },
];

export function Header() {
  
  const logoText = useKorivaElement('nav_logo_text',
    { content: 'STUDIO REFORM', visible: true },
    { section: 'Header', label: 'Logo Text', type: 'text' });

  const navCta = useKorivaElement('nav_cta',
    { content: 'Book Free Class', visible: true },
    { section: 'Header', label: 'Nav CTA', type: 'button' });

const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const siteData = useSiteData();
  const gymName = siteData?.gym?.name?.toUpperCase() || 'STUDIO REFORM';
  const logoUrl = siteData?.brand?.logo_url;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
            <Link href="#pricing" className="btn-primary">
              Free Class
            </Link>
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
            <Link href="#pricing" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 text-center">
              Free Class
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
