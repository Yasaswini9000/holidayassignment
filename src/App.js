import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HeaderTabs from './components/HeaderTabs';
import PackageTabs from './components/PackageTabs';
import SearchFilters from './components/SearchFilters';
import RouteInfo from './components/RouteInfo';
import FareSummary from './components/FareSummary';
import FlightList from './components/FlightList';

export default function App() {
  const [activeHoliday, setActiveHoliday] = useState('Indian');
  const [activePackage, setActivePackage] = useState('withFlights');
  const [selectedStar, setSelectedStar] = useState('3★');

  return (
    <div className="flex h-screen bg-[#f4f7fa] font-sans text-[#1e293b]">
      {/* 1. SIDEBAR */}
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* 2. HEADER TABS */}
        <HeaderTabs activeHoliday={activeHoliday} onHolidayChange={setActiveHoliday} />

        <div className="p-10 max-w-7xl mx-auto">
          {/* 3. PACKAGE SELECTION */}
          <PackageTabs activePackage={activePackage} onPackageChange={setActivePackage} />

          {/* 4. SEARCH & FILTER */}
          <SearchFilters selectedStar={selectedStar} onStarChange={setSelectedStar} />

          {/* 5. ROUTE INFO */}
          <RouteInfo />

          {/* 6. FARE SUMMARY */}
          <FareSummary />

          {/* 7. FLIGHT LISTINGS */}
          <FlightList />
        </div>
      </main>
    </div>
  );
}