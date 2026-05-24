import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import CheatsheetsPage from './pages/CheatsheetsPage';
import InstructorPage from './pages/InstructorPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const SmoothScroll: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let target = 0;
    let current = 0;
    let rafId = 0;
    let active = false;

    const getMax = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const tick = () => {
      current += (target - current) * 0.09;
      const diff = target - current;

      if (Math.abs(diff) < 0.5) {
        window.scrollTo(0, target);
        current = target;
        active = false;
      } else {
        window.scrollTo(0, current);
        rafId = requestAnimationFrame(tick);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
      target = Math.max(0, Math.min(getMax(), target + delta));
      if (!active) {
        active = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      if (!active) {
        target = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <SmoothScroll />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/cheatsheets" element={<CheatsheetsPage />} />
          <Route path="/instructor" element={<InstructorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
