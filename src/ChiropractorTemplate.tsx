import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAnchorNav, isAnchorHref } from '@/lib/anchors';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Plus,
  Minus,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { businessInfo, navigationInfo } from '@/data/site';
import { bookingGlassOnDarkClasses, bookingPrimaryOnLightClasses } from '@/lib/bookingCta';

const noiseStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat',
  backgroundSize: '128px 128px',
} as const;

const heroStats = [
  'Vuodesta 1994',
  'Kelan opintotuki',
  'Harjoittelu omalla klinikalla',
];

const educationCards = [
  {
    image: '/assets/ha/koulutus.jpg',
    title: 'Hierontakoulutus',
    description: 'Käytännönläheinen monimuoto-koulutus, joka sopii myös työn ohessa opiskeltavaksi. Ei aiempaa kokemusta tarvita.',
    linkText: 'Tutustu koulutukseen',
    linkHref: '/hierontakoulutus',
  },
  {
    image: '/assets/ha/hierontakoulutuksen-sisalto-1920w.webp',
    title: 'Hieronnan ammattitutkinto',
    description: 'Valmistut näyttötutkintoon ja saat oikeuden käyttää suojattua ammattinimikettä koulutettu hieroja.',
    linkText: 'Lue lisää',
    linkHref: '/hierontakoulutus#ammattitutkinto',
  },
  {
    image: '/assets/ha/jatkokoulutukset.jpg',
    title: 'Jatkokoulutukset',
    description: 'Syventävät kurssit alan ammattilaisille, esimerkiksi mobilisointitekniikat ja leukanivelen hoito.',
    linkText: 'Lue lisää',
    linkHref: '/hierontakoulutus#jatkokoulutukset',
  },
];

const serviceCards = [
  {
    title: 'Oppilashieronta',
    description: 'Edulliset oppilashieronnat koulun omalla klinikalla opettajan valvonnassa. Hinnat alkaen 25 €.',
    linkText: 'Varaa hieronta',
    linkHref: businessInfo.bookingUrl,
    external: true,
  },
  {
    title: 'Fysioterapia',
    description: 'Fysioterapeutin vastaanotto samassa tilassa, lääkärin lähetteellä tai ilman. Palvelusta vastaa Fysikaalinen hoitola Acutus.',
    linkText: 'Katso yhteystiedot',
    linkHref: businessInfo.fysioPhoneLink,
    external: true,
  },
  {
    title: 'Lahjakortit',
    description: 'Anna hyvinvointia lahjaksi. Lahjakortilla voit ilahduttaa läheistä oppilashierontaan tai muihin saatavilla oleviin palveluihin.',
    linkText: 'Kysy lahjakorteista',
    linkHref: businessInfo.emailLink,
    external: true,
  },
];

const audiences = [
  {
    title: 'Alanvaihtajalle',
    description: 'Kun etsit uutta käytännönläheistä ammattia terveyden ja hyvinvoinnin parissa.',
  },
  {
    title: 'Ensimmäistä ammattia hakevalle',
    description: 'Selkeä väylä ammattiin, työelämään ja mahdollisiin jatko‑opintoihin.',
  },
  {
    title: 'Osaamisensa syventäjälle',
    description: 'Mahdollisuus opiskella joustavasti työn ohessa ja laajentaa omaa osaamista.',
  },
];

const SHOW_STUDY_JOURNEY = false; // väliaikaisesti piilotettu etusivulta
const SHOW_PRICING = false; // väliaikaisesti piilotettu etusivulta
const SHOW_FURTHER_EDUCATION = true;
const SHOW_SERVICES_SECTION = false; // sisältö siirretty pääkorttiosion alariviin

const studySteps = [
  {
    title: 'Lähiopetus ja teoria',
    description: 'Lähiopetusta kaksi kertaa viikossa aamu- tai iltaryhmässä. Osa teoriasta opiskellaan itsenäisesti ohjatusti.',
  },
  {
    title: 'Harjoittelu oikeiden asiakkaiden kanssa',
    description: '200 tuntia käytännön harjoittelua oikeiden asiakkaiden kanssa opettajan tuella.',
  },
  {
    title: 'Näytöt ja ammattitutkinto',
    description: 'Valmistaudu hieronnan ammattitutkinnon näyttöihin ja koulutetun hierojan ammattinimikkeeseen.',
  },
];

const priceIncludes = [
  'Opetus ja ohjaus koko koulutuksen ajan',
  'Opintomateriaalit',
  'Työelämässä oppiminen koulun klinikalla',
  'Työpaita',
  'Sähköinen opiskelijakortti',
  'Näytöt',
];

const studentStories = [
  {
    name: 'Toni Mäntylä',
    meta: 'Valmistunut 2023',
    photo: '/assets/ha/toni.jpg',
    text: 'Koululle on aina kiva tulla, vaikka oma päivä olisi ollut raskas: iloinen ja kannustava henkilökunta saa aina hymyn huulille. Opettajilta saa apua ja ohjausta aina, kun sitä tarvitsee.',
  },
  {
    name: 'Disa Ylimäki',
    meta: 'Aloitti keväällä 2023',
    photo: '/assets/ha/disa.jpg',
    text: 'Oppitunnit ovat mielenkiintoisia ja opettajat auttavat jokaista tarvittaessa. Luokallamme on mahtava yhteishenki, eikä oppitunneilta puutu hyvää energiaa ja naurua. Voin suositella lämpimästi.',
  },
  {
    name: 'Sari Haavisto',
    meta: 'Alanvaihtaja keittiöalalta',
    photo: '/assets/ha/sari.jpg',
    text: 'Opiskelu on joustavaa ja kannustavaa, ja henkilökunta on aina tukena. Turun Hieronta-Akatemiassa huolehditaan opiskelijoista suurella sydämellä. Päivääkään en ole katunut.',
  },
];

const teamMembers = [
  {
    name: 'Anu Vallin',
    title: 'Koulun johtaja ja ammatillinen opettaja',
    photo: '/assets/ha/anu.jpg',
    bio: 'Fysioterapeutti, hieronnan opettaja vuodesta 1994, näyttötutkintomestari ja ammatillinen opettajankoulutuksen käynyt ohjaaja. Vetää myös Fysikaalinen hoitola Acutus -toimintaa.',
  },
  {
    name: 'Niko Muurinen',
    title: 'Opettaja',
    photo: '/assets/ha/niko.jpg',
    bio: 'Naprapaatti (AMK) ja hieroja, opettanut koululla vuodesta 2017. Erikoistunut tuki- ja liikuntaelinvaivojen tutkimiseen, hoitoon ja ennaltaehkäisyyn.',
  },
  {
    name: 'Katja Hakanen',
    title: 'Asiakaspalvelu ja opiskelijoiden ohjaus',
    photo: '/assets/ha/katja.jpg',
    bio: 'Hieroja ja perushoitaja, ohjaa opiskelijoita työssäoppimisjaksolla ja osallistuu opetukseen.',
  },
  {
    name: 'Kirsi Rinneranta',
    title: 'Oppimisharjoittelun valvoja',
    photo: '/assets/ha/kirsi-rinneranta-avatar.webp',
    bio: 'Koulutettu hieroja, HEAT-tutkinto. Valvoo ja ohjaa opiskelijoiden käytännön harjoittelua koulun klinikalla.',
  },
  {
    name: 'Riikka Backman',
    title: 'Oppimisharjoittelun valvoja',
    photo: '/assets/ha/riikka.jpg',
    bio: 'Koulutettu hieroja, HEAT-tutkinto. Valvoo ja ohjaa opiskelijoiden käytännön harjoittelua koulun klinikalla.',
  },
];

const faqs = [
  {
    question: 'Kenelle koulutus on tarkoitettu?',
    answer: 'Kaikille terveydestä ja hyvinvoinnista kiinnostuneille. Hakijalta edellytetään vähintään 18 vuoden ikää, hyvää psyykkistä ja fyysistä terveydentilaa sekä hyvää suomen kielen taitoa (B1).',
  },
  {
    question: 'Miten hierontakoulutukseen haetaan?',
    answer: 'Täytä hakulomake sivuillamme, niin otamme sinuun yhteyttä. Hakeminen ei sido sinua vielä mihinkään.',
  },
  {
    question: 'Onko koulutus opintotuen alaista?',
    answer: 'Kyllä. Koulutuksen ajalta voi hakea Kelan opintotukea, ja opintolainan saaminen on mahdollista.',
  },
  {
    question: 'Mitä koulutus maksaa?',
    answer: 'Koulutuksen hinta on 2200 € (sis. alv. 25,5 %). Lisäksi varausmaksu 200 €, joka vähennetään koulutusmaksusta.',
  },
  {
    question: 'Voiko maksun maksaa erissä?',
    answer: 'Kyllä, maksun voi maksaa 1-10 erässä (esimerkiksi 10 x 200 €) ja henkilökohtainen maksuaikataulu on mahdollinen. Osan koulutuksesta voi maksaa myös ylimääräisellä työharjoittelulla.',
  },
  {
    question: 'Kuinka paljon käytännön harjoittelua koulutukseen sisältyy?',
    answer: 'Työharjoittelua on 200 tuntia koulun omalla klinikalla, ja opettaja on aina paikalla tukemassa. Koulu hankkii harjoitteluasiakkaat puolestasi.',
  },
  {
    question: 'Voiko ryhmää vaihdella?',
    answer: 'Kyllä. Aamuryhmä kokoontuu klo 9-12 ja iltaryhmä klo 17-20, ja ryhmien välillä voi vaihdella tarvittaessa.',
  },
  {
    question: 'Täytyykö minun tehdä hankintoja koulutusta varten?',
    answer: 'Ei. Oppimateriaalit, hoitomateriaalit ja työpaita sisältyvät koulutuksen hintaan.',
  },
];

function ScrollReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ChiropractorTemplate() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const anchorNav = useAnchorNav();

  const prevReview = () => setReviewIndex((i) => (i === 0 ? studentStories.length - 1 : i - 1));
  const nextReview = () => setReviewIndex((i) => (i === studentStories.length - 1 ? 0 : i + 1));
  const visibleReviews = [
    studentStories[reviewIndex % studentStories.length],
    studentStories[(reviewIndex + 1) % studentStories.length],
    studentStories[(reviewIndex + 2) % studentStories.length],
  ];

  return (
    <div className="min-h-[100dvh] font-inter antialiased">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/assets/ha/hero-luokka.jpg"
            alt=""
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-[center_38%]"
          />
        </div>
        <div className="absolute inset-0 bg-[#0E2E52]/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,26,46,0.62)_0%,rgba(10,26,46,0.42)_34%,rgba(10,26,46,0.08)_62%)]" aria-hidden="true" />
        <div className="absolute inset-0" style={{ ...noiseStyle, opacity: 0.03 }} />
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 md:px-10 min-[1200px]:pl-28 min-[1200px]:pr-12 flex flex-col items-start justify-center text-left min-h-[100dvh] pt-[80px] pb-10 md:pt-[76px] md:pb-12">
          <div className="w-full max-w-[760px] lg:origin-top-left lg:scale-[1.05]">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8C3E4]/75 mb-5"
            >
              Turun Hieronta-Akatemia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-cormorant text-[38px] md:text-[42px] lg:text-[49px] font-semibold text-white leading-[1.08] mb-5 max-w-[720px]"
            >
              Opiskele hierojaksi Turussa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-inter text-[14px] md:text-[16px] text-white/80 leading-[1.7] mb-8 max-w-[520px] text-balance"
            >
              Käytännönläheinen hierojakoulutus Turussa. Monimuoto-opiskelu, oma harjoitteluklinikka ja joustavat opiskeluvaihtoehdot.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <a
                href={businessInfo.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center px-8 py-3 rounded-lg font-inter text-[14px] font-semibold tracking-wide cursor-pointer ${bookingGlassOnDarkClasses}`}
              >
                Hae koulutukseen
              </a>
              <Link
                to="/hierontakoulutus"
                className="inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center px-7 py-3 rounded-lg font-inter text-[14px] font-medium tracking-wide text-white/85 border border-white/20 hover:text-white hover:border-white/35 transition-colors duration-300"
              >
                Tutustu koulutukseen
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 font-inter text-[12px] text-white/85 tracking-[0.04em]"
            >
              {heroStats.map((stat, i) => (
                <span key={stat} className="inline-flex items-center gap-4">
                  {i > 0 && <span className="text-white/30" aria-hidden="true">•</span>}
                  <span className="text-white/75">{stat}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand intro */}
      <section className="bg-[linear-gradient(to_bottom,#F5F1E9_0%,#F5F1E9_55%,#FFFFFF_100%)] py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-[1150px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 md:gap-16 items-center">
              <div className="md:order-1">
                <span className="block w-10 h-px bg-[#C9BFAF] mb-6" aria-hidden="true" />
                <h2 className="font-cormorant text-[32px] md:text-[34px] text-[#0E2E52] leading-[1.12] tracking-[-0.01em] mb-6 max-w-[480px]">Korkeatasoista hierontakoulutusta Turussa</h2>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.8] max-w-[460px] mb-5">
                  Turun Hieronta-Akatemia on vuodesta 1994 toiminut hierojakoulu Turun keskustassa. Monimuoto-opinnot yhdistävät lähiopetuksen, ohjatun etäopiskelun ja runsaasti käytännön harjoittelua, joten opiskelu sopii hyvin myös työn ohessa.
                </p>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.8] max-w-[460px]">
                  Koulutuksessa on kaksi aloitusta vuodessa, aamu- ja iltaryhminä, ja iloinen yhteishenki kantaa koko opiskeluajan. modernit tilamme sijaitsevat Turun keskustassa Humalistonkadulla.
                </p>
              </div>
              <div className="md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[18px] bg-[#EAE5DD]" aria-hidden="true" />
                  <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-[16px] border border-white/70 shadow-[0_20px_50px_rgba(14,46,82,0.10)]">
                    <img src="/assets/ha/korkeatasoista.jpg" alt="Opiskelija harjoittelee hierontaa koulun klinikalla" loading="lazy" className="w-full h-full object-cover object-center" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Application banner */}
      <section className="bg-white px-6 md:px-12 pb-2 md:pb-4">
        <div className="max-w-[920px] mx-auto">
          <ScrollReveal>
            <div className="rounded-[12px] bg-[#0E2E52] px-6 py-6 md:px-10 md:py-7 flex flex-col md:flex-row items-center justify-between gap-5 border border-[#E2E8F0]">
              <p className="font-inter text-[14px] md:text-[15px] text-white/90 leading-[1.6] text-center md:text-left">
                <span className="font-semibold text-white">Seuraava koulutus alkaa 18.3.2027:</span> valitse aamu- tai iltaryhmä. Haku käynnissä!
              </p>
              <a
                href={businessInfo.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex shrink-0 min-h-[44px] items-center justify-center px-6 py-2 rounded-lg font-inter text-[13px] font-semibold tracking-wide ${bookingGlassOnDarkClasses}`}
              >
                Hae koulutukseen
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Education overview */}
      <section id="koulutus" className="bg-white pt-12 md:pt-16 pb-16 md:pb-20 px-6 md:px-12 scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-12">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Koulutus &amp; palvelut</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#0E2E52] leading-[1.35] mb-6">Koulutusta ja palveluita eri tarpeisiin</h2>
              <p className="font-inter text-[14px] text-[#1F2937] leading-[1.75] max-w-[460px] mx-auto">Hierojakoulutuksesta jatkokoulutuksiin sekä oppilashierontaan ja fysioterapiaan.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {educationCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08} className="h-full">
                <Link to={card.linkHref.split('#')[0] || '/'} onClick={isAnchorHref(card.linkHref) ? anchorNav(card.linkHref) : undefined} className="group flex flex-col h-full rounded-[12px] overflow-hidden bg-[#0E2E52] border border-[#E2E8F0] shadow-[0_8px_28px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
                  <div className="relative overflow-hidden">
                    <div className="w-full aspect-[16/8.5]">
                      <img src={card.image} alt={card.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
                    </div>
                  </div>
                  <div className="relative flex-1 bg-[#12395A] bg-[length:170%] bg-center px-7 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8" style={{ backgroundImage: 'url(/assets/ha/kampin_service_blue_text_bg.jpg)' }}>
                    <div className="absolute inset-0 bg-[#061420]/25" aria-hidden="true" />
                    <div className="relative h-full flex flex-col">
                      <h3 className="font-cormorant text-[24px] md:text-[25px] text-white mb-3.5">{card.title}</h3>
                      <p className="font-inter text-[13.5px] text-white/80 leading-[1.7] mb-6 max-w-[360px]">{card.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 font-inter text-[13px] text-white/70 group-hover:text-white transition-colors duration-300">
                        {card.linkText}
                        <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div id="hierontapalvelut" className="flex items-center gap-5 my-10 md:my-12 scroll-mt-24" aria-hidden="true">
              <span className="flex-1 h-px bg-[#E2E8F0]" />
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5A6A7A]">Myös saatavilla</p>
              <span className="flex-1 h-px bg-[#E2E8F0]" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {serviceCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08} className="h-full">
                <a href={card.linkHref} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full rounded-[12px] overflow-hidden bg-[#0E2E52] border border-[#E2E8F0] shadow-[0_8px_28px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
                  <div className="relative flex-1 bg-[#12395A] bg-[length:170%] bg-center px-7 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8" style={{ backgroundImage: 'url(/assets/ha/kampin_service_blue_text_bg.jpg)' }}>
                    <div className="absolute inset-0 bg-[#061420]/25" aria-hidden="true" />
                    <div className="relative h-full flex flex-col">
                      <h3 className="font-cormorant text-[24px] md:text-[25px] text-white mb-3.5">{card.title}</h3>
                      <p className="font-inter text-[13.5px] text-white/80 leading-[1.7] mb-6 max-w-[360px]">{card.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 font-inter text-[13px] text-white/70 group-hover:text-white transition-colors duration-300">
                        {card.linkText}
                        <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kenelle koulutus sopii */}
      <section id="opiskelijaksi" className="bg-white py-10 md:py-14 px-6 md:px-12 scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-[920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal delay={0.08}>
              <div className="relative md:max-w-[88%]">
                <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[18px] bg-[#EAE5DD]" aria-hidden="true" />
                <div className="relative aspect-[4/3.6] overflow-hidden rounded-[18px] border border-white/70 shadow-[0_20px_50px_rgba(14,46,82,0.11)]">
                  <img src="/assets/ha/ensimmaiseksi.jpg" alt="Opiskelija opettelee anatomiaa opettajan kanssa" loading="lazy" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0271E0]/70 mb-4">Opiskelijaksi</p>
                <h2 className="font-cormorant font-semibold text-[30px] md:text-[38px] text-[#0E2E52] leading-[1.08] tracking-[-0.01em] mb-4">Kenelle koulutus sopii?</h2>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.7] mb-6 max-w-[420px]">Hierojakoulutus sopii monenlaisiin elämäntilanteisiin ja erilaisiin tavoitteisiin.</p>
                <div>
                  {audiences.map((audience) => (
                    <div key={audience.title} className="py-3.5 first:pt-0 border-t border-[#E2E8F0] first:border-t-0">
                      <h3 className="font-cormorant font-medium text-[23px] md:text-[25px] text-black leading-[1.12] mb-1.5">{audience.title}</h3>
                      <p className="font-inter text-[15px] text-[#4A5B6E] leading-[1.65] max-w-[440px]">{audience.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Näin opinnot etenevät (väliaikaisesti piilotettu) */}
      {SHOW_STUDY_JOURNEY && (
      <section className="bg-[#F5F1E9] py-14 md:py-16 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-7 md:mb-9">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-4">Opintojen kulku</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#0E2E52] leading-[1.35]">Näin opinnot etenevät</h2>
            </div>
          </ScrollReveal>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="hidden md:block absolute top-[19px] left-0 right-0 h-px bg-[#0271E0]/15" />
            {studySteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="flex md:block gap-5">
                  <div className="flex flex-col items-center shrink-0 md:block">
                    <span className="relative font-cormorant text-[32px] md:text-[38px] leading-none text-[#0271E0] md:bg-[#F5F1E9] md:pr-4">{String(i + 1).padStart(2, '0')}</span>
                    {i < studySteps.length - 1 && <span className="md:hidden w-px flex-1 bg-[#0271E0]/20 mt-3" />}
                  </div>
                  <div className="md:mt-4 pb-1">
                    <h3 className="font-cormorant text-[24px] md:text-[26px] text-[#0E2E52] leading-[1.15] mb-3">{step.title}</h3>
                    <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.75] md:max-w-[280px]">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Pricing (väliaikaisesti piilotettu) */}
      {SHOW_PRICING && (
      <section id="hinta" className="bg-white py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Hinta</p>
              <h2 className="font-cormorant text-[26px] md:text-[30px] text-[#0E2E52] leading-[1.35] mb-4">Koulutuksen hinta</h2>
              <p className="font-inter text-[14px] text-[#1F2937] leading-[1.75] max-w-[420px] mx-auto">Selkeä kokonaishinta ilman piilokuluja. Maksun voi jakaa eriin oman tilanteen mukaan.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-[14px] border border-[#E2E8F0] bg-[#F5F1E9] shadow-[0_8px_28px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="bg-[#0E2E52] px-8 py-8 text-center">
                <p className="font-cormorant text-[44px] md:text-[52px] text-white leading-none mb-2">2200 €</p>
                <p className="font-inter text-[13px] text-[#A8C3E4]">sis. alv. 25,5 %</p>
              </div>
              <div className="px-8 py-8 md:px-10">
                <ul className="space-y-2.5 mb-7">
                  {priceIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-inter text-[14px] text-[#1F2937] leading-[1.6]">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0271E0] shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 mb-8 border-t border-[#E2E8F0] pt-6">
                  <p className="font-inter text-[13.5px] text-[#5A6A7A] leading-[1.7]">Varausmaksu 200 € vähennetään koulutusmaksusta. Maksu onnistuu 1-10 erässä, esimerkiksi 10 x 200 €.</p>
                  <p className="font-inter text-[13.5px] text-[#5A6A7A] leading-[1.7]">Koulutus on Kelan opintotuen alainen, ja osan opinnoista voi maksaa ylimääräisellä työharjoittelulla.</p>
                </div>
                <a
                  href={businessInfo.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full min-h-[52px] items-center justify-center px-8 py-3 rounded-lg font-inter text-[15px] font-semibold tracking-wide ${bookingPrimaryOnLightClasses}`}
                >
                  Hae koulutukseen
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      )}

      {/* Student stories */}
      <section id="kokemukset" className="relative bg-[#0E2E52] pt-20 md:pt-28 pb-14 md:pb-16 px-6 md:px-12 overflow-hidden scroll-mt-16 md:scroll-mt-20">
        <div className="absolute inset-0" style={{ ...noiseStyle, opacity: 0.02 }} />
        <div className="relative max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A8C3E4] mb-5">Kokemuksia</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#FFFFFF] leading-[1.35] mb-6">Opiskelijamme kertovat</h2>
              <p className="font-inter text-[14px] text-white/60 leading-[1.7] max-w-[420px] mx-auto">Millaista opiskelu Turun Hieronta-Akatemiassa on? Kuuntele omia opiskelijoitamme.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="flex items-center gap-3 md:gap-4">
                <button onClick={prevReview} aria-label="Edellinen tarina" className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-white/10 items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors bg-transparent cursor-pointer">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>

                <div className="flex-1 flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:max-w-[95%] md:mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {visibleReviews.map((story, i) => (
                    <div key={`${reviewIndex}-${i}`} className="flex-shrink-0 w-full sm:w-[260px] md:w-auto md:flex-1 md:basis-0 snap-start">
                      <div className="bg-[#16436F] rounded-xl p-7 md:p-9 border border-white/[0.05] shadow-[0_8px_24px_rgba(0,0,0,0.16)] h-full flex flex-col">
                        <p className="font-inter text-[14px] text-[#FFFFFF]/90 leading-[1.75] italic flex-1">&ldquo;{story.text}&rdquo;</p>
                        <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[#FFFFFF]/[0.06]">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shrink-0">
                            <img src={story.photo} alt={story.name} loading="lazy" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-inter text-[14px] font-bold text-[#FFFFFF]">{story.name}</p>
                            <p className="font-inter text-[11px] text-white/50">{story.meta}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={nextReview} aria-label="Seuraava tarina" className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-white/10 items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors bg-transparent cursor-pointer">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex md:hidden items-center justify-center gap-4 mt-4">
                <button onClick={prevReview} aria-label="Edellinen tarina" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors bg-transparent cursor-pointer">
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button onClick={nextReview} aria-label="Seuraava tarina" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors bg-transparent cursor-pointer">
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section id="opettajat" className="relative bg-[#0A2140] pt-20 md:pt-24 pb-16 md:pb-20 px-6 md:px-12 overflow-hidden scroll-mt-16 md:scroll-mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/ha/kampin_service_blue_text_bg.jpg)' }} aria-hidden="true" />
        <div className="absolute inset-0 bg-[#0A2140]/80" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0E2E52_0%,rgba(14,46,82,0)_200px)]" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ ...noiseStyle, opacity: 0.02 }} />
        <div className="relative max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A8C3E4] mb-5">Opettajat</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#FFFFFF] leading-[1.2]">Kokenut ja kannustava opetushenkilökunta</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-14">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover object-center border-2 border-white/10 shadow-[0_10px_28px_rgba(0,0,0,0.28)] mb-5"
                    />
                  ) : (
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#16436F] border-2 border-white/10 shadow-[0_10px_28px_rgba(0,0,0,0.28)] flex items-center justify-center mb-5">
                      <span className="font-cormorant text-[32px] text-[#A8C3E4]">
                        {member.name.split(' ').map((p) => p.charAt(0)).join('')}
                      </span>
                    </div>
                  )}
                  <p className="font-cormorant font-semibold text-[22px] text-white mb-1.5 leading-[1.2]">{member.name}</p>
                  <p className="font-inter text-[11px] font-medium text-[#A8C3E4] tracking-[0.1em] uppercase mb-3.5">{member.title}</p>
                  <p className="font-inter text-[13px] text-white/70 leading-[1.7] max-w-[280px]">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={teamMembers.length * 0.06}>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#16436F] border-2 border-white/10 shadow-[0_10px_28px_rgba(0,0,0,0.28)] flex items-center justify-center mb-5">
                  <img src={navigationInfo.logoWhite} alt="" aria-hidden="true" className="w-16 opacity-80 pointer-events-none select-none" />
                </div>
                <p className="font-inter text-[11px] font-medium text-[#A8C3E4] tracking-[0.1em] uppercase mb-3">Opettajat &amp; henkilökunta</p>
                <p className="font-cormorant font-semibold text-[22px] text-white mb-2.5 leading-[1.2]">Tutustu koko tiimiimme</p>
                <p className="font-inter text-[13px] text-white/70 leading-[1.7] max-w-[280px] mb-4">Tutustu koulun opettajiin, ohjaajiin ja muihin opiskelijoiden tukena toimiviin ammattilaisiin.</p>
                <span className="inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-white/90">
                  Tutustu henkilökuntaan
                  <ArrowRight size={13} strokeWidth={1.5} />
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hierontapalvelut (väliaikaisesti piilotettu, sisältö on nyt pääkorttiosiossa) */}
      {SHOW_SERVICES_SECTION && (
      <section className="bg-[#F5F1E9] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-14">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Hierontapalvelut</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#0E2E52] leading-[1.25] mb-5">Hierontaa ja fysioterapiaa saman katon alla</h2>
              <p className="font-inter text-[14px] md:text-[15px] text-[#5A6A7A] leading-[1.7] max-w-[520px] mx-auto">Edulliset oppilashieronnat toteutetaan koulun omalla klinikalla opettajan valvonnassa. Fysioterapiasta samoissa tiloissa vastaa Fysikaalinen hoitola Acutus.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
            <ScrollReveal delay={0.1}>
              <div className="group block rounded-lg h-full">
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                  <img
                    src="/assets/ha/hierontapalvelut.jpg"
                    alt="Oppilashieronta koulun klinikalla"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-cormorant text-[24px] md:text-[26px] text-[#0E2E52] leading-[1.2] mb-1">Oppilashieronta</h3>
                <p className="font-inter text-[13px] text-[#5A6A7A] tracking-wide mb-3">Koulun klinikka, Humalistonkatu 17 A</p>
                <p className="font-inter text-[13px] text-[#5A6A7A] leading-[1.65] mb-5 max-w-[380px]">Edulliset oppilashieronnat koulun omalla klinikalla opettajan valvonnassa. Hinnat alkaen 25 € (esim. niska-hartia 30 min). Hieronnan tekevät koulumme opiskelijat osana työharjoitteluaan.</p>
                <a
                  href={businessInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-inter text-[13px] font-semibold text-[#0E2E52] underline underline-offset-4 decoration-[#0E2E52]/25 hover:decoration-[#0E2E52]/70 transition-colors duration-300"
                >
                  Varaa hieronta
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="group block rounded-lg h-full">
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                  <img
                    src="/assets/ha/fysioterapia.jpg"
                    alt="Fysioterapia"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-cormorant text-[24px] md:text-[26px] text-[#0E2E52] leading-[1.2] mb-1">Fysioterapia</h3>
                <p className="font-inter text-[13px] text-[#5A6A7A] tracking-wide mb-3">Fysikaalinen hoitola Acutus, fysioterapeutti Anu Vallin</p>
                <p className="font-inter text-[13px] text-[#5A6A7A] leading-[1.65] mb-5 max-w-[380px]">Fysioterapeutin vastaanotto samassa tilassa, lääkärin lähetteellä tai ilman. Vastaanotolla autetaan tuki- ja liikuntaelinvaivoissa sekä kuntoutuksessa.</p>
                <a
                  href={businessInfo.fysioPhoneLink}
                  className="inline-flex items-center font-inter text-[13px] font-semibold text-[#0E2E52] underline underline-offset-4 decoration-[#0E2E52]/25 hover:decoration-[#0E2E52]/70 transition-colors duration-300"
                >
                  Katso yhteystiedot: {businessInfo.fysioPhone}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      )}

      {/* Jatkokoulutukset */}
      {SHOW_FURTHER_EDUCATION && (
      <section className="bg-[linear-gradient(to_bottom,#F5F1E9_0%,#F5F1E9_55%,#FFFFFF_100%)] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-12 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[18px] bg-[#EAE5DD]" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-white/70 shadow-[0_20px_50px_rgba(14,46,82,0.10)]">
                  <img src="/assets/ha/jatkokoulutukset.jpg" alt="Jatkokoulutuksen käytännön harjoittelua" loading="lazy" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Jatkokoulutukset</p>
                <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#0E2E52] leading-[1.25] mb-6">Oletko jo alan ammattilainen?</h2>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.8] mb-8 max-w-[440px]">
                  Tarjoamme syventäviä jatkokoulutuksia ja kursseja hierojille sekä muiden terveys- ja hyvinvointialan ammattilaisille, esimerkiksi mobilisointitekniikoista ja leukanivelen hoidosta.
                </p>
                <Link
                  to="/hierontakoulutus"
                  onClick={anchorNav('/hierontakoulutus#jatkokoulutukset')}
                  className="group inline-flex items-center gap-1.5 font-inter text-[13.5px] font-semibold text-[#0E2E52] underline underline-offset-4 decoration-[#0E2E52]/25 hover:decoration-[#0E2E52]/70 transition-colors duration-300"
                >
                  Tutustu jatkokoulutuksiin
                  <ArrowRight size={13} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      )}

      {/* FAQ */}
      <section id="ukk" className="bg-white pt-16 md:pt-20 pb-10 md:pb-14 px-6 md:px-12 scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-14">
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Usein kysyttyä</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#0E2E52] leading-[1.25]">Vastauksia yleisimpiin kysymyksiin</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8 md:mb-10">
              {faqs.slice(0, 5).map((faq, i) => (
                <div key={i} className="border-t border-[#E2E8F0]">
                  <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="group w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left bg-transparent border-none cursor-pointer">
                    <span className="font-inter text-[15px] md:text-[16px] font-semibold text-[#0E2E52] leading-[1.5]">{faq.question}</span>
                    <span className="shrink-0 mt-[2px] text-[#5A6A7A]/50 group-hover:text-[#5A6A7A]/70 transition-colors duration-300">
                      {openFaqIndex === i ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-[400ms] ease-out ${openFaqIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="font-inter text-[14px] text-[#1F2937] leading-[1.75] pb-5 md:pb-6 max-w-[540px]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-[#E2E8F0]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/ha/hakeminen.jpg)' }} />
        <div className="absolute inset-0 bg-[#0E2E52]/85" style={{ backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,16,32,0.25)_0%,rgba(4,16,32,0.35)_100%)]" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-[480px] mx-auto px-6 pt-[2vh]">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A8C3E4] mb-4">Seuraava askel</p>
              <h2 className="font-cormorant text-[28px] md:text-[34px] text-[#FFFFFF] leading-[1.25] mb-4">Voisiko hierojan ammatti olla sinun seuraava suuntasi?</h2>
              <p className="font-inter text-[15px] text-white/80 leading-[1.6] mb-10 max-w-[360px] mx-auto">Seuraava koulutus alkaa 18.3.2027 ja haku on käynnissä. Jätä hakemus jo tänään, niin olemme sinuun yhteydessä.</p>

              <div className="flex flex-col items-center gap-3 mb-8">
                <a
                  href={businessInfo.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full max-w-[280px] min-h-[56px] items-center justify-center px-8 py-3 rounded-lg font-inter text-[16px] font-semibold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 cursor-pointer ${bookingGlassOnDarkClasses}`}
                >
                  Hae koulutukseen
                </a>
                <a href={businessInfo.phoneLink} className="inline-flex items-center justify-center gap-2 font-inter text-[15px] font-medium text-white/90 tracking-wide no-underline hover:text-white transition-colors duration-300 py-2">
                  <Phone size={15} strokeWidth={1.5} />
                  Kysy lisää: {businessInfo.phone}
                </a>
                <p className="font-inter text-[12px] text-white/80 tracking-wide">Asiakaspalvelu ma ja ke klo 9-20, pe klo 9-16</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
