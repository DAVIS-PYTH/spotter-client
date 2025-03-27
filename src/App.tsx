import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@pages/LandingPage';
import Onboarding from '@pages/OnboardingPage';
import DashboardPage from '@pages/DashboardPage';
import { PAGES } from '@routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={PAGES.HOME.route} element={<LandingPage />} />
        <Route path={PAGES.ONBOARDING.route} element={<Onboarding />} />
        <Route path={PAGES.DASHBOARD.route} element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
