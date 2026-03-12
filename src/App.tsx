import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { DataExpertise } from './components/DataExpertise';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { NotFound } from './components/NotFound';
import { BinaryBackground } from './components/BinaryBackground';
import styles from './App.module.css';

function App() {
  return (
    <HashRouter>
      <BinaryBackground />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <main>
            <Navbar />
            <Hero />
            <DataExpertise />
            <div className={styles.splitSection}>
              <Experience />
              <Skills />
            </div>
            <div className={styles.splitSection}>
              <Certifications />
              <Education />
            </div>
            <Contact />
            <Footer />
          </main>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App
