import React from 'react';
import { motion } from 'framer-motion';

import UsMap from '@components/us-map';
import Navbar from '@components/navbar';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black/50 text-white">
      <Navbar />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Get more out of each mile with{' '}
            <span className="text-blue-400">
              {'Spotter'.split('').map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-400 md:text-xl">
            Your trusted companion for efficient fleet management and
            compliance. Track your fleet, manage logs, and stay compliant with
            ease.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="mb-4 text-xl font-semibold">Real-time Tracking</h3>
            <p className="text-gray-400">
              Monitor your fleet's location and status in real-time with
              advanced GPS tracking.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="mb-4 text-xl font-semibold">ELD Compliance</h3>
            <p className="text-gray-400">
              Stay compliant with FMCSA regulations using our easy-to-use
              electronic logging system.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="mb-4 text-xl font-semibold">Fleet Analytics</h3>
            <p className="text-gray-400">
              Make data-driven decisions with comprehensive fleet performance
              analytics.
            </p>
          </div>
        </div>
      </div>

      <UsMap
        dots={[
          {
            start: { lat: 40.7128, lng: -74.006 }, // New York
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 41.8781, lng: -87.6298 }, // Chicago
            end: { lat: 29.7604, lng: -95.3698 }, // Houston
          },
          {
            start: { lat: 47.6062, lng: -122.3321 }, // Seattle
            end: { lat: 25.7617, lng: -80.1918 }, // Miami
          },
        ]}
      />
    </div>
  );
};

export default LandingPage;
