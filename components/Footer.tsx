'use client';

import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { studio } from '@/lib/site-data';
import { useSiteData } from '@/components/SiteDataProvider';

export function Footer() {
  const siteData = useSiteData();
  const gymName = siteData?.gym?.name?.toUpperCase() || 'STUDIO REFORM';
  const instagram = siteData?.brand?.instagram_url || siteData?.gym?.instagram || studio.social.instagram;
  const facebook = siteData?.brand?.facebook_url || siteData?.gym?.facebook || studio.social.facebook;

  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/">
              <span className="font-heading text-white tracking-wider" style={{ fontSize: '1.2rem' }}>
                {gymName}
              </span>
            </Link>
            <p className="font-body text-white/30 text-sm leading-relaxed max-w-xs mt-4">
              Precision Pilates, Barre & Sculpt in Austin, Texas. Science-backed training
              for the body you want.
            </p>
            <div className="flex gap-4 mt-6">
              {instagram && (
                <a href={instagram} className="text-white/30 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              )}
              {facebook && (
                <a href={facebook} className="text-white/30 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="font-body text-white text-xs tracking-widest uppercase mb-6">Explore</p>
            <ul className="space-y-3">
              {[
                { label: 'Classes', href: '#classes' },
                { label: 'Instructors', href: '#teachers' },
                { label: 'Studio', href: '#studio' },
                { label: 'Membership', href: '#pricing' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body text-white/30 hover:text-white/60 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-white text-xs tracking-widest uppercase mb-6">Visit Us</p>
            <address className="not-italic space-y-3">
              <p className="font-body text-white/30 text-sm leading-relaxed">
                {studio.address.street}<br />
                {studio.address.city}, {studio.address.state} {studio.address.zip}
              </p>
              <div className="space-y-1 pt-2">
                {Object.entries(studio.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-4 text-xs font-body">
                    <span className="text-white/20 uppercase tracking-wider">{day}</span>
                    <span className="text-white/40">{hours}</span>
                  </div>
                ))}
              </div>
            </address>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/20 text-xs">
            © {new Date().getFullYear()} Studio Reform. All rights reserved.
          </p>
          <a
            href="https://codegyms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/20 hover:text-white/40 text-xs transition-colors"
          >
            Powered by Koriva
          </a>
        </div>
      </div>
    </footer>
  );
}
