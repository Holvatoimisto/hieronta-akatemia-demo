import { useState } from 'react';
import { Phone, Plus, Minus, Check } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { businessInfo } from '@/data/site';
import { bookingGlassOnDarkClasses, bookingPrimaryOnLightClasses } from '@/lib/bookingCta';

const requirements = [
  'Vähintään 18 vuoden ikä',
  'Hyvä motivaatio ja opiskeluhalu',
  'Hyvä psyykkinen ja fyysinen terveydentila',
  'Perusopetuksen oppimäärä',
  'Hyvä suomen kielen taito (vähintään B1)',
];

const tutkinnonOsat = [
  {
    title: 'Tuki- ja liikuntaelinongelmaisen potilaan terveyden ja toimintakyvyn edistäminen',
    osp: '70 osp',
  },
  {
    title: 'Sosiaali- ja terveydenhuoltoalan yrittäjänä toimiminen',
    osp: '30 osp',
  },
  {
    title: 'Kansansairauksien ennaltaehkäiseminen hierojan työssä',
    osp: '25 osp',
  },
  {
    title: 'Raajanivelten liikkuvuuden edistäminen',
    osp: '25 osp',
  },
];

const qualityMarks = [
  'Koulutustoimintaa vuodesta 1994',
  'Ammatilliset opettajat ja näyttötutkintomestari',
  '200 tuntia valvottua työharjoittelua koulun omalla klinikalla',
  'Koulu hankkii harjoitteluasiakkaat puolestasi',
  'Kelan opintotuki ja mahdollisuus opintolainaan',
  'Yhteistyössä Pirkanmaan Urheiluhierojakoulun kanssa',
];

const jatkokoulutukset = [
  {
    title: 'Leukanivelen liikerajoitteen hoito ja manuaaliterapia',
    date: 'Su 13.9.2026',
    price: '189 €',
    teacher: 'Samuli Sairiala',
  },
  {
    title: 'Mobilisointitekniikat-kurssi',
    date: '3.-4.10.2026',
    price: '300 €',
    teacher: 'Osteopaatti Nora Seppä',
  },
  {
    title: 'Hieronnan täsmätekniikat',
    date: 'La 17.10.2026',
    price: '',
    teacher: '',
  },
];

const pageFaqs = [
  {
    question: 'Tarvitsenko aiempaa kokemusta alalta?',
    answer: 'Ei tarvitse. Koulutus sopii myös täysin alan ulkopuolelta tuleville, kunhan olet vähintään 18-vuotias, motivoitunut ja hyvässä fyysisessä sekä psyykkisessä kunnossa.',
  },
  {
    question: 'Miten opinnot on järjestetty?',
    answer: 'Opinnot ovat monimuoto-opiskelua: lähiopetusta kaksi kertaa viikossa ensimmäiset kolme kuukautta, osa teoriasta itsenäisesti ohjatusti ja 200 tuntia työharjoittelua koulun omalla klinikalla.',
  },
  {
    question: 'Voiko aamu- ja iltaryhmän välillä vaihdella?',
    answer: 'Kyllä. Aamuryhmä kokoontuu tiistaisin ja torstaisin klo 9.00-12.00 ja iltaryhmä klo 17.00-20.00. Ryhmien välillä voi vaihdella tarvittaessa oman elämäntilanteen mukaan.',
  },
  {
    question: 'Onko koulutus opintotuen alaista?',
    answer: 'Kyllä. Koulutuksen ajalta voi hakea Kelan opintotukea, ja opintolainan saaminen on mahdollista.',
  },
  {
    question: 'Mitä ammattinimekettä voin käyttää valmistuttuani?',
    answer: 'Kun olet suorittanut hieronnan ammattitutkinnon hyväksytysti, saat oikeuden käyttää suojattua ammattinimekettä koulutettu hieroja.',
  },
];

export function HierontaKoulutusPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-[100dvh] font-inter antialiased">
      <Header />

      {/* Page hero */}
      <section className="bg-[#F5F1E9] pt-32 md:pt-40 pb-14 md:pb-16 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Hierontakoulutus</p>
            <h1 className="font-cormorant text-[32px] md:text-[42px] text-[#0E2E52] leading-[1.15] mb-5">Opiskele hierojaksi</h1>
            <p className="font-inter text-[14px] md:text-[15px] text-[#5A6A7A] leading-[1.7] max-w-[460px] mx-auto mb-8">
              Hieronnan ammattitutkinto Turun Hieronta-Akatemiassa: käytännönläheinen monimuoto-koulutus, johon voi hakea ilman aiempaa alan kokemusta. Koulutus on jatkunut vuodesta 1994.
            </p>
            <a
              href={businessInfo.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[52px] items-center justify-center px-8 py-3 rounded-lg font-inter text-[14px] font-semibold tracking-wide ${bookingPrimaryOnLightClasses}`}
            >
              Hae koulutukseen
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* What the education is */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <span className="block w-10 h-px bg-[#C9BFAF] mb-6" aria-hidden="true" />
                <h2 className="font-cormorant text-[28px] md:text-[34px] text-[#0E2E52] leading-[1.15] mb-6">Mitä hierojakoulutus on?</h2>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.8] mb-5">
                  Turun Hieronta-Akatemian hierojakoulutus johtaa hieronnan ammattitutkintoon, jonka sisältö perustuu Opetushallituksen vaatimuksiin. Opinnot yhdistävät lähiopetusta, ohjattua itsenäistä opiskelua ja runsaasti valvottua käytännön työtä.
                </p>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.8] mb-7">
                  Aiempaa kokemusta alalta ei tarvita. Hakijalta odotamme seuraavaa:
                </p>
                <ul className="space-y-2.5">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2.5 font-inter text-[14px] text-[#1F2937] leading-[1.6]">
                      <Check size={16} strokeWidth={2} className="mt-[3px] text-[#0271E0] shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[18px] bg-[#EAE5DD]" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-white/70 shadow-[0_20px_50px_rgba(14,46,82,0.10)]">
                  <img src="/assets/ha/koulutus.jpg" alt="Hierojakoulutuksen opetusta" loading="lazy" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Alkavat koulutukset */}
      <section className="bg-[#F5F1E9] py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative md:order-1 order-2">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[18px] bg-[#EAE5DD]" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-white/70 shadow-[0_20px_50px_rgba(14,46,82,0.10)]">
                  <img src="/assets/ha/alkavat.jpg" alt="Alkava hierojakoulutus" loading="lazy" className="w-full h-full object-cover object-center" />
                </div>
              </div>
              <div className="md:order-2 order-1">
                <span className="block w-10 h-px bg-[#C9BFAF] mb-6" aria-hidden="true" />
                <h2 className="font-cormorant text-[28px] md:text-[34px] text-[#0E2E52] leading-[1.15] mb-6">Alkava koulutus</h2>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.8] mb-6">
                  Seuraava koulutus käynnistyy <span className="font-semibold text-[#0E2E52]">18.3.2027</span> ja päättyy 26.5.2028. Haku on käynnissä: voit valita aamu- tai iltaryhmän ja vaihdella ryhmien välillä tarvittaessa.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-[10px] border border-[#E2E8F0] px-6 py-5">
                    <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0E2E52] mb-1">Aamuryhmä</p>
                    <p className="font-inter text-[14px] text-[#5A6A7A]">Tiistaisin ja torstaisin klo 9.00-12.00</p>
                  </div>
                  <div className="bg-white rounded-[10px] border border-[#E2E8F0] px-6 py-5">
                    <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0E2E52] mb-1">Iltaryhmä</p>
                    <p className="font-inter text-[14px] text-[#5A6A7A]">Tiistaisin ja torstaisin klo 17.00-20.00</p>
                  </div>
                </div>
                <a
                  href={businessInfo.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-[48px] items-center justify-center px-7 py-3 rounded-lg font-inter text-[14px] font-semibold tracking-wide ${bookingPrimaryOnLightClasses}`}
                >
                  Hae koulutukseen
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Koulutuksen sisältö */}
      <section id="sisalto" className="bg-white py-14 md:py-20 px-6 md:px-12 scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-[920px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-14">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Opetushallituksen vaatimusten mukainen</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#0E2E52] leading-[1.35]">Koulutuksen sisältö</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {tutkinnonOsat.map((osa, i) => (
              <ScrollReveal key={osa.title} delay={i * 0.07}>
                <div className="h-full bg-[#F5F1E9] rounded-[12px] border border-[#E2E8F0] px-7 py-7">
                  <p className="font-cormorant text-[26px] text-[#0271E0] mb-3">{osa.osp}</p>
                  <p className="font-inter text-[14px] font-semibold text-[#0E2E52] leading-[1.55]">{osa.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ammattitutkinto */}
      <section id="tutkinto" className="bg-[#F5F1E9] py-14 md:py-20 px-6 md:px-12 scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <span className="block w-10 h-px bg-[#C9BFAF] mb-6" aria-hidden="true" />
                <h2 className="font-cormorant text-[28px] md:text-[34px] text-[#0E2E52] leading-[1.15] mb-6">Hieronnan ammattitutkinto</h2>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.8] mb-5">
                  Koulutus valmentaa hieronnan ammattitutkinnon näyttöihin. Tutkinto suoritetaan näyttötutkintona, jossa osoitat osaamisesi käytännön työtehtävissä.
                </p>
                <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.8]">
                  Hyväksytysti suoritettu tutkinto antaa oikeuden käyttää suojattua ammattinimekettä <span className="font-semibold text-[#0E2E52]">koulutettu hieroja</span>. Näytöt sisältyvät koulutuksen hintaan.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[18px] bg-[#EAE5DD]" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-white/70 shadow-[0_20px_50px_rgba(14,46,82,0.10)]">
                  <img src="/assets/ha/ammattitutkinto.jpg" alt="Hieronnan ammattitutkinnon näyttö" loading="lazy" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hinta */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Hinta</p>
              <h2 className="font-cormorant text-[26px] md:text-[30px] text-[#0E2E52] leading-[1.35] mb-4">Koulutuksen hinta</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-[14px] border border-[#E2E8F0] bg-[#F5F1E9] shadow-[0_8px_28px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="bg-[#0E2E52] px-8 py-8 text-center">
                <p className="font-cormorant text-[44px] md:text-[52px] text-white leading-none mb-2">2200 €</p>
                <p className="font-inter text-[13px] text-[#A8C3E4]">sis. alv. 25,5 %</p>
              </div>
              <div className="px-8 py-8 md:px-10">
                <div className="space-y-3 mb-8">
                  <p className="font-inter text-[13.5px] text-[#5A6A7A] leading-[1.7]">Varausmaksu 200 € vähennetään koulutusmaksusta. Varausmaksua ei palauteta, jos peruutus tehdään alle 3 viikkoa ennen koulutuksen alkua.</p>
                  <p className="font-inter text-[13.5px] text-[#5A6A7A] leading-[1.7]">Koulutusmaksun voi maksaa 1-10 erässä (esim. 1 x 2000 € tai 10 x 200 €). Henkilökohtainen maksuaikataulu on mahdollinen, ja osan koulutuksesta voi maksaa ylimääräisellä työharjoittelulla (yli 200 h).</p>
                  <p className="font-inter text-[13.5px] text-[#5A6A7A] leading-[1.7]">Hintaan sisältyvät opetus, opintomateriaalit, työelämässä oppiminen, työpaita, sähköinen opiskelijakortti ja näytöt.</p>
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

      {/* Laadun tuntomerkit */}
      <section className="bg-[#0E2E52] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-12">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A8C3E4] mb-5">Miksi meidän koulumme?</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-white leading-[1.35]">Laadun tuntomerkit</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-4">
              {qualityMarks.map((mark) => (
                <li key={mark} className="flex items-start gap-3 bg-[#16436F] rounded-lg border border-white/[0.06] px-6 py-4">
                  <Check size={17} strokeWidth={2} className="mt-[2px] text-[#A8C3E4] shrink-0" />
                  <span className="font-inter text-[14px] text-white/90 leading-[1.6]">{mark}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Jatkokoulutukset */}
      <section id="jatkokoulutukset" className="bg-white py-14 md:py-20 px-6 md:px-12 scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-[920px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-14">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Syksy 2026</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#0E2E52] leading-[1.35] mb-5">Jatkokoulutukset alan ammattilaisille</h2>
              <p className="font-inter text-[14px] text-[#5A6A7A] leading-[1.75] max-w-[480px] mx-auto">Ilmoittautuminen puhelimitse {businessInfo.phone} tai sähköpostitse {businessInfo.email}.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {jatkokoulutukset.map((kurssi, i) => (
              <ScrollReveal key={kurssi.title} delay={i * 0.07}>
                <div className="h-full bg-[#F5F1E9] rounded-[12px] border border-[#E2E8F0] px-6 py-7">
                  <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0271E0] mb-3">{kurssi.date}</p>
                  <p className="font-cormorant text-[20px] text-[#0E2E52] leading-[1.25] mb-3">{kurssi.title}</p>
                  {kurssi.price && <p className="font-inter text-[14px] font-semibold text-[#0E2E52] mb-1">{kurssi.price}</p>}
                  {kurssi.teacher && <p className="font-inter text-[12.5px] text-[#5A6A7A]">{kurssi.teacher}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F1E9] pt-14 md:pt-20 pb-12 md:pb-16 px-6 md:px-12">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-14">
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">Usein kysyttyä</p>
              <h2 className="font-cormorant text-[26px] md:text-[32px] text-[#0E2E52] leading-[1.25]">Kysymyksiä koulutuksesta</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div>
              {pageFaqs.map((faq, i) => (
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/ha/hakeminen.jpg)' }} />
        <div className="absolute inset-0 bg-[#0E2E52]/80" style={{ backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }} />
        <div className="relative z-10 w-full max-w-[480px] mx-auto px-6 py-20">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A8C3E4] mb-4">Seuraava askel</p>
              <h2 className="font-cormorant text-[28px] md:text-[34px] text-[#FFFFFF] leading-[1.25] mb-4">Hae mukaan seuraavaan koulutukseen</h2>
              <p className="font-inter text-[15px] text-white/80 leading-[1.6] mb-10 max-w-[340px] mx-auto">Seuraava koulutus alkaa 18.3.2027. Täytä hakulomake, niin otamme sinuun yhteyttä.</p>
              <div className="flex flex-col items-center gap-3">
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
