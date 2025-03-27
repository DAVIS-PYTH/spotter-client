import React from 'react';
import { TabsTrigger, TabsList } from '@components/navigation-tab';
import { Gamepad2, MapPin, Truck, User } from 'lucide-react';

const DashboardNav: React.FC = () => {
  return (
    <div>
      <TabsList className="min-w-[200px] flex-col gap-2 rounded-none bg-transparent px-1 py-0 text-white">
        <TabsTrigger
          value="overview"
          className="relative w-full justify-start gap-3 after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-gray-800 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-blue-400"
        >
          <Truck className="h-5 w-5 opacity-60" />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="trips"
          className="relative w-full justify-start gap-3 after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-gray-800 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-blue-400"
        >
          <MapPin className="h-5 w-5 opacity-60" />
          Trips
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          className="relative w-full justify-start gap-3 after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-gray-800 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-blue-400"
        >
          <User className="h-5 w-5 opacity-60" />
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="fun"
          className="relative w-full justify-start gap-3 after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-gray-800 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-blue-400"
        >
          <Gamepad2 className="h-5 w-5 opacity-60" />
          Fun Island
        </TabsTrigger>
      </TabsList>
    </div>
  );
};

export default DashboardNav;
