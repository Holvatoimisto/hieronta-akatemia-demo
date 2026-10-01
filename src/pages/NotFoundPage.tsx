import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/** Lightweight branded 404 for unknown routes. */
export function NotFoundPage() {
  return (
    <div className="bg-[#F5F1E9] min-h-[100dvh]">
      <Helmet>
        <title>Sivua ei löytynyt | Turun Hieronta-Akatemia</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <div className="h-[60px] md:h-[68px]" />
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[520px] mx-auto text-center">
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A6A7A] mb-5">404</p>
          <h1 className="font-cormorant text-[32px] md:text-[40px] text-[#0E2E52] leading-[1.15] mb-5">
            Sivua ei löytynyt
          </h1>
          <p className="font-inter text-[14px] md:text-[15px] text-[#5A6A7A] leading-[1.7] mb-10 max-w-[360px] mx-auto">
            Etsimääsi sivua ei ole olemassa tai se on siirretty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex min-h-[52px] items-center justify-center px-8 py-3 rounded-lg font-inter text-[14px] font-semibold tracking-wide bg-[#0271E0] text-white hover:bg-[#0159B5] transition-colors duration-300"
            >
              Takaisin etusivulle
            </Link>
            <Link
              to="/hierontakoulutus"
              className="inline-flex min-h-[52px] items-center justify-center px-8 py-3 rounded-lg font-inter text-[14px] font-semibold tracking-wide text-[#0E2E52] border border-[#0E2E52]/30 hover:bg-[#0E2E52]/5 transition-colors duration-300"
            >
              Tutustu koulutukseen
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
