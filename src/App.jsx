import { useRef } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderComponent } from './components/HeaderComponent';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetail } from './components/ProjectDetail';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetail } from './components/ArticleDetail';
import { PrintingModelsPage } from './pages/PrintingModelsPage';
import { AboutComponent } from './components/AboutComponent';
import { AboutPage } from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
import { FooterComponent } from './components/FooterComponent';
import './styles/globals.css';

export default function App() {
  const mainRef = useRef(null);
  return (
    <Router>
      <div className="app">
        <HeaderComponent />
        <main ref={mainRef} className="main-content">
          <Routes>
            <Route path="/" element={<HomePage scrollContainerRef={mainRef}/>} />
            <Route path="/aboutme" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:articleId" element={<ArticleDetail />} />
            <Route path="/printingmodels" element={<PrintingModelsPage />} />
            <Route path="/printingmodels/:modelId" element={<PrintingModelsPage detailMode={true} />} />
            <Route path="/curriculum" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}
