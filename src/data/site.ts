// Shared site-wide business facts for Turun Hieronta-Akatemia, used by the
// homepage template, Header and Footer so they stay in one place.
export const businessInfo = {
  name: 'Turun Hieronta-Akatemia',
  tagline: 'Opiskele hierojaksi Turussa',
  fullTagline: 'TURUN HIERONTA-AKATEMIA, OPISKELE HIEROJAKSI',
  address: 'Humalistonkatu 17 A (2. krs.), 20100 Turku',
  phone: '041 328 2990',
  phoneLink: 'tel:+358413282990',
  email: 'info@hieronta-akatemia.fi',
  emailLink: 'mailto:info@hieronta-akatemia.fi',
  hours: 'Asiakaspalvelu: ma ja ke klo 9-20, pe klo 9-16',
  applyUrl: 'https://www.hieronta-akatemia.com/hierontakoulutus/hakeminen-koulutukseen',
  bookingUrl: 'https://nettivaraus5.ajas.fi/v/8425/?lid=dd47cc102178',
  giftCardUrl: 'https://hieronta-akatemia.ajaskauppa.fi',
  fysioPhone: '040 502 3156',
  fysioPhoneLink: 'tel:+358405023156',
  googleMapsUrl: 'https://maps.google.com/?q=Humalistonkatu+17+A,+20100+Turku',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Humalistonkatu+17+A,+20100+Turku&output=embed',
};

export const footerColumns = [
  {
    title: 'Koulutus',
    links: [
      { label: 'Hierontakoulutus', href: '/hierontakoulutus' },
      { label: 'Opiskelijaksi', href: '/#opiskelijaksi' },
      { label: 'Koulutuksen hinta', href: '/#hinta' },
      { label: 'Opiskelijoiden kokemuksia', href: '/#kokemukset' },
      { label: 'Opettajat', href: '/#opettajat' },
      { label: 'UKK', href: '/#ukk' },
    ],
  },
  {
    title: 'Palvelut',
    links: [
      { label: 'Oppilashieronta', href: '/#hierontapalvelut' },
      { label: 'Varaa hieronta', href: businessInfo.bookingUrl },
      { label: 'Fysioterapia', href: '/#hierontapalvelut' },
      { label: 'Lahjakortit', href: businessInfo.giftCardUrl },
    ],
  },
  {
    title: 'Yhteystiedot',
    links: [
      { label: businessInfo.phone, href: businessInfo.phoneLink },
      { label: businessInfo.email, href: businessInfo.emailLink },
      { label: 'Humalistonkatu 17 A, 20100 Turku', href: businessInfo.googleMapsUrl },
      { label: 'ma ja ke klo 9-20, pe klo 9-16', href: businessInfo.phoneLink },
    ],
  },
];

export const footerMeta = {
  copyright: 'Turun Hieronta-Akatemia Oy. Kaikki oikeudet pidätetään.',
};

// Global header navigation data (shared Header component).
export const navigationInfo = {
  logo: '/assets/ha/logo-color.png',
  logoWhite: '/assets/ha/logo-white.png',
  ctaButton: { label: 'Hae koulutukseen', href: businessInfo.applyUrl },
  secondaryCta: { label: 'Varaa hieronta', href: businessInfo.bookingUrl },
};
