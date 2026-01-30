import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Research from './pages/Research';
import ResearchPost from './pages/ResearchPost';
import Software from './pages/Software';
import Apply from './pages/Apply';
import './App.css';

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/' : '/'}>
      <div className="App">
        <RedirectHandler />
        <ScrollToTop />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/:slug" element={<ResearchPost />} />
            <Route path="/software" element={<Software />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect');
    console.log('Checking for redirect:', redirect);
    
    if (redirect) {
      console.log('Redirecting to:', redirect);
      sessionStorage.removeItem('redirect');
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;