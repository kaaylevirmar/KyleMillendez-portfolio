import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Sidebar from './components/Sidebar';
import PageTransition from './components/PageTransition';

// Wrapper component to handle AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col md:flex-row min-h-screen bg-gray-900'>
        <Sidebar />
        <div className='flex-1 p-4 md:p-8 ml-0 md:ml-20 lg:ml-64'>
          <div className='container mx-auto'>
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
