import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Team from './pages/Team';
import Research from './pages/Research';
import ResearchPost from './pages/ResearchPost';
import Software from './pages/Software';
import Apply from './pages/Apply';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:slug" element={<ResearchPost />} />
        <Route path="/software" element={<Software />} />
        <Route path="/apply" element={<Apply />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
