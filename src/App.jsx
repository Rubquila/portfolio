import { useState, useEffect, useRef } from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { AllProjects } from './components/AllProjects'
import { ProjectDetail } from './components/ProjectDetail'
import { AllArticles } from './components/AllArticles'
import { ArticleDetail } from './components/ArticleDetail'
import { AllPrintingModels } from './components/AllPrintingModels'
import { About } from './components/About'
import { AboutDetail } from './components/AboutDetail'
import { Resume } from './components/Resume'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './styles/globals.css'

export default function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [selectedArticleId, setSelectedArticleId] = useState(null)
  const [selectedPrintingModelId, setSelectedPrintingModelId] = useState(null)
  const [viewMode, setViewMode] = useState('section') // 'section' o 'detail'
  const mainRef = useRef(null);

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId)
    setViewMode('detail')
  }

  const handleArticleSelect = (articleId) => {
    setSelectedArticleId(articleId)
    setViewMode('detail')
  }

  const handlePrintingModelSelect = (printingModelId) => {
    setSelectedPrintingModelId(printingModelId)
    setViewMode('detail')
  }

  const handleBackFromDetail = () => {
    setViewMode('section')
    setSelectedProjectId(null)
    setSelectedArticleId(null)
    setSelectedPrintingModelId(null)
  }

  return (
    <div className="app">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <main ref={mainRef} className="main-content">
        {viewMode === 'detail' && selectedProjectId ? (
          <ProjectDetail projectId={selectedProjectId} onBack={handleBackFromDetail} onSelectProject={handleProjectSelect} />
        ) : viewMode === 'detail' && selectedArticleId ? (
          <ArticleDetail articleId={selectedArticleId} onBack={handleBackFromDetail} />
        ) : (
          <>
            {currentSection === 'home' && <Home onNavigate={setCurrentSection} onProjectSelect={handleProjectSelect} scrollContainerRef={mainRef} />}
            {currentSection === 'all-projects' && <AllProjects onProjectSelect={handleProjectSelect} />}
            {currentSection === 'articles' && <AllArticles onArticleSelect={handleArticleSelect} />}
            {currentSection === 'printingModels' && <AllPrintingModels onPrintingModelSelect={handlePrintingModelSelect} />}
            {currentSection === 'about-detail' && <AboutDetail onNavigate={setCurrentSection} />}
            {currentSection === 'resume' && <Resume />}
            {currentSection === 'contact' && <Contact />}
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
