import { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage/ProjectDetailPage';
import { ArticlesPage } from './pages/ArticlesPage/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage/ArticleDetailPage';
import { PrintingModelsPage } from './pages/PrintingModelsPage/PrintingModelsPage';
import { PrintingModelDetailPage } from './pages/PrintingModelDetailPage/PrintingModelDetailPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ResumePage } from './pages/ResumePage/ResumePage';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import './styles/globals.css';

export default function App() {
  const mainRef = useRef(null);

  return (
    <Router>
      <AppRoutes mainRef={mainRef} />
    </Router>
  );
}

function AppRoutes({ mainRef }) {
  const location = useLocation();

  return (
    <div className="app">
      <HeaderComponent />
      <main ref={mainRef} className="main-content">
        {/* Aplica el efecto de transición entre rutas  */}
        <AnimatePresence
          mode="wait"
          initial={false}
          /* Resetea el scroll al cambiar de ruta */
          onExitComplete={() => {
            const container = mainRef?.current;
            if (container && typeof container.scrollTo === 'function') {
              container.scrollTo({ top: 0, behavior: 'auto' });
            } else {
              window.scrollTo({ top: 0, behavior: 'auto' });
            }
          }}
        >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.50, ease: 'easeInOut' }}
            className="route-motion-wrapper"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage scrollContainerRef={mainRef} />} />
              <Route path="/aboutme" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:articleId" element={<ArticleDetailPage />} />
              <Route path="/printingmodels" element={<PrintingModelsPage />} />
              <Route path="/printingmodels/:modelId" element={<PrintingModelDetailPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
            <FooterComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
