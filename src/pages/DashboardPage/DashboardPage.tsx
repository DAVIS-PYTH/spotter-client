import React from 'react';
import UsMap from '@components/us-map';
import Navbar from '@components/navbar';
import DashboardNav from '@components/dashboard-nav';
import { NavigationTab } from '@components/navigation-tab';
import Overview from './components/overview';
import FunIsland from './components/fun-island';

const DashboardPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black/50 text-white">
      {/* Global components */}
      <UsMap withLines={false} />
      <Navbar withoutCta />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <NavigationTab defaultValue="overview" className="flex w-full gap-8">
          <DashboardNav />

          <div className="flex-1">
            <Overview />
            <FunIsland />
          </div>
        </NavigationTab>
      </div>
    </div>
  );
};

export default DashboardPage;
