import React from 'react';

const PackageTabs = ({ activePackage, onPackageChange }) => {
  return (
    <div className="flex gap-8 mb-8">
      {['withFlights', 'withoutFlights'].map(pkg => (
        <button
          key={pkg}
          onClick={() => onPackageChange(pkg)}
          className={`text-base font-black pb-1 border-b-2 transition-all ${activePackage === pkg ? 'border-black text-black' : 'border-transparent text-gray-300'}`}
        >
          Package {pkg === 'withFlights' ? 'with Flights' : 'without Flights'}
        </button>
      ))}
    </div>
  );
};

export default PackageTabs;
