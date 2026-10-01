import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { businessInfo, navigationInfo } from '@/data/site';
import { useAnchorNav, isAnchorHref } from '@/lib/anchors';

const navLinks: { label: string; href: string; route?: boolean; dropdown?: string[] }[] = [
  {
    label: 'Hierontakoulutus',
    href: '/hierontakoulutus',
    route: true,
    dropdown: ['Alkavat koulutukset', 'Koulutuksen sisältö', 'Hakeminen koulutukseen', 'Hieronnan ammattitutkinto'],
  },
  {
    label: 'Opiskelijaksi',
    href: '/#opiskelijaksi',
    dropdown: ['Alanvaihtajalle', 'Ensimmäiseksi tutkinnoksi', 'Opiskelijamme kertovat'],
  },
  { label: 'Jatkokoulutukset', href: '/#koulutus' },
  { label: 'Hierontapalvelut', href: '/#hierontapalvelut', dropdown: ['Oppilashieronta', 'Fysioterapia'] },
  { label: 'Opettajat', href: '/#opettajat' },
  { label: 'Yhteystiedot', href: '/#yhteystiedot' },
];

export function Header() {
  const { pathname } = useLocation();
  const anchorNav = useAnchorNav();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  const navLinkClass = (active: boolean) =>
    `font-inter text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 whitespace-nowrap ${
      active ? 'text-white underline underline-offset-[6px] decoration-white/50' : 'text-white/90 hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0E2E52]/95 shadow-[0_1px_12px_rgba(0,0,0,0.18)]">
      <div className="relative max-w-[1500px] mx-auto px-5 md:px-10 min-[1200px]:pl-28 min-[1200px]:pr-16 h-[60px] md:h-[68px] flex items-center justify-between">
        <div className="h-9 md:h-10 w-9 md:w-10 xl:w-[110px] shrink-0" aria-hidden="true" />
        <Link to="/" className="absolute left-5 md:left-10 min-[1200px]:left-28 top-1/2 -translate-y-1/2 z-10">
          <img
            src={navigationInfo.logo}
            alt={businessInfo.name}
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden min-[1400px]:flex flex-1 items-center justify-center gap-5">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <Link
                  to={link.href.split('#')[0] || '/'}
                  onClick={isAnchorHref(link.href) ? anchorNav(link.href) : undefined}
                  className={`${navLinkClass(link.route === true && pathname === link.href)} inline-flex items-center gap-1 py-2`}
                >
                  {link.label}
                  <ChevronDown size={12} strokeWidth={2} className="opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <div className="min-w-[240px] rounded-[12px] bg-[#0E2E52] border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.3)] py-2">
                    {link.dropdown.map((item) => (
                      <span
                        key={item}
                        className="block px-5 py-2.5 font-inter text-[13px] text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors duration-200 cursor-default whitespace-nowrap"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href.split('#')[0] || '/'}
                onClick={isAnchorHref(link.href) ? anchorNav(link.href) : undefined}
                className={navLinkClass(link.route === true && pathname === link.href)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right actions */}
        <div className="hidden min-[1400px]:flex items-center shrink-0">
          <a
            href={navigationInfo.ctaButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center justify-center px-6 py-2 rounded-md font-inter text-[13px] font-semibold tracking-[0.06em] leading-none whitespace-nowrap transition-colors duration-300 bg-[#0271E0] text-white border border-[#0271E0] hover:bg-[#0159B5] hover:border-[#0159B5]"
          >
            {navigationInfo.ctaButton.label}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="min-[1400px]:hidden flex items-center gap-2 relative z-10">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#FFFFFF] transition-colors bg-transparent border-none cursor-pointer"
            aria-label={mobileOpen ? 'Sulje valikko' : 'Avaa valikko'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-[1400px]:hidden absolute top-full left-0 right-0 bg-[#0E2E52] border-t border-white/[0.08] px-5 py-6"
        >
          <Link to="/" onClick={() => setMobileOpen(false)} className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#FFFFFF]/90 py-3 border-b border-[#E2E8F0]/[0.06]">Etusivu</Link>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href.split('#')[0] || '/'}
              onClick={(e) => {
                if (isAnchorHref(link.href)) anchorNav(link.href)(e);
                setMobileOpen(false);
              }}
              className="block font-inter text-[14px] font-semibold uppercase tracking-wider text-[#FFFFFF]/90 py-3 border-b border-[#E2E8F0]/[0.06]"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={navigationInfo.ctaButton.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center w-full px-5 py-2 rounded-md font-inter text-[14px] font-semibold tracking-wide leading-none bg-[#0271E0] text-white hover:bg-[#0159B5] transition-colors duration-300 border-none"
            >
              {navigationInfo.ctaButton.label}
            </a>
            <a
              href={navigationInfo.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center w-full px-5 py-2 rounded-md font-inter text-[14px] font-semibold tracking-wide leading-none border border-white/30 text-white hover:bg-white/10 transition-colors duration-300"
            >
              {navigationInfo.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
