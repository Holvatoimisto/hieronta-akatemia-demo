import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ChiropractorTemplate } from '@/ChiropractorTemplate';
import { HierontaKoulutusPage } from '@/pages/HierontaKoulutusPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ScrollManager } from '@/components/ScrollManager';

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<ChiropractorTemplate />} />
          <Route path="/hierontakoulutus" element={<HierontaKoulutusPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
