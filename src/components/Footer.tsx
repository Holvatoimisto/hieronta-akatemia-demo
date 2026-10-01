import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { businessInfo, footerColumns, footerMeta, navigationInfo } from '@/data/site';
import { useAnchorNav, isAnchorHref } from '@/lib/anchors';

export function Footer() {
  const anchorNav = useAnchorNav();
  return (
    <footer id="yhteystiedot" className="bg-[#0E2E52] pt-14 md:pt-16 pb-10 md:pb-12 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10">
          <div>
            <img src={navigationInfo.logoWhite} alt={businessInfo.name} className="h-10 w-auto mb-4" />
            <p className="font-inter text-[13px] text-[#A8C3E4] mb-4">{businessInfo.tagline}</p>
            <ul className="space-y-2">
              <li className="font-inter text-[14px] text-[#A8C3E4] flex items-center gap-2">
                <MapPin size={14} className="shrink-0" /> {businessInfo.address}
              </li>
              <li>
                <a href={businessInfo.phoneLink} className="font-inter text-[14px] text-[#A8C3E4] hover:text-white transition-colors flex items-center gap-2 no-underline">
                  <Phone size={14} className="shrink-0" /> {businessInfo.phone}
                </a>
              </li>
              <li>
                <a href={businessInfo.emailLink} className="font-inter text-[14px] text-[#A8C3E4] hover:text-white transition-colors flex items-center gap-2 no-underline">
                  <Mail size={14} className="shrink-0" /> {businessInfo.email}
                </a>
              </li>
              <li className="font-inter text-[13px] text-[#A8C3E4]/80 flex items-center gap-2">
                <Clock size={14} className="shrink-0" /> {businessInfo.hours}
              </li>
            </ul>
          </div>
          {footerColumns.map((col, i) => (
            <div key={i}>
              <h4 className="font-inter text-[13px] font-semibold uppercase tracking-[0.08em] text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href.split('#')[0] || '/'}
                        onClick={isAnchorHref(link.href) ? anchorNav(link.href) : undefined}
                        className="font-inter text-[14px] text-[#A8C3E4] hover:text-white transition-colors no-underline"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-inter text-[14px] text-[#A8C3E4] hover:text-white transition-colors no-underline">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Google Maps */}
        <div className="border-t border-[#E2E8F0]/[0.06] pt-10 mb-10">
          <div className="max-w-[640px]">
            <p className="font-inter text-[12px] font-semibold uppercase tracking-wider text-[#FFFFFF]/80 mb-3">Koulumme sijaitsee Turun keskustassa</p>
            <p className="font-inter text-[13px] text-[#A8C3E4] mb-3">{businessInfo.address}</p>
            <div className="rounded-lg overflow-hidden border border-[#E2E8F0]/[0.08]" style={{ filter: 'grayscale(25%) contrast(95%) brightness(90%)' }}>
              <iframe
                src={businessInfo.mapEmbedSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Turun Hieronta-Akatemia kartalla"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#E2E8F0]/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-[12px] text-[#A8C3E4]/70">{footerMeta.copyright}</p>
          <div className="flex gap-4">
            <a href={businessInfo.phoneLink} className="text-[#A8C3E4]/70 hover:text-white transition-colors" aria-label="Soita meille"><Phone size={18} strokeWidth={1.5} /></a>
            <a href={businessInfo.emailLink} className="text-[#A8C3E4]/70 hover:text-white transition-colors" aria-label="Lähetä sähköpostia"><Mail size={18} strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
