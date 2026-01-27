import React from 'react';
import FlightCard from './FlightCard';

const FlightList = () => {
  const outboundFlights = [
    {
      airline: 'Air India Express',
      code: 'IX 2879',
      price: '105,300',
      depTime: '12:05',
      arrTime: '13:50',
      from: 'HYD',
      to: 'GOX',
      type: 'Publish',
      isSelected: true,
      logoBg: 'bg-orange-600',
      planeRotate: 'rotate-45',
    },
    {
      airline: 'IndiGo',
      code: '6E 6512',
      price: '108,200',
      depTime: '06:30',
      arrTime: '08:15',
      from: 'HYD',
      to: 'GOX',
      type: 'Publish',
      isSelected: false,
      logoBg: 'bg-blue-800',
      planeRotate: 'rotate-45',
    },
  ];

  const returnFlights = [
    {
      airline: 'Air India',
      code: 'AI 879',
      price: '105,300',
      depTime: '20:00',
      arrTime: '21:45',
      from: 'GOX',
      to: 'HYD',
      type: 'SME',
      isSelected: true,
      logoBg: 'bg-red-700',
      planeRotate: 'rotate-[225deg]',
    },
    {
      airline: 'SpiceJet',
      code: 'SG 441',
      price: '96,800',
      depTime: '22:15',
      arrTime: '00:05',
      from: 'GOX',
      to: 'HYD',
      type: 'Publish',
      isSelected: false,
      logoBg: 'bg-yellow-500',
      planeRotate: 'rotate-[225deg]',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-10">
      {/* Outbound Column */}
      <div>
        <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[3px] border-l-4 border-blue-500 pl-4 mb-6">
          Outbound Flights
        </h3>
        {outboundFlights.map((flight, index) => (
          <FlightCard key={index} {...flight} />
        ))}
      </div>

      {/* Return Column */}
      <div>
        <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[3px] border-l-4 border-orange-500 pl-4 mb-6">
          Return Flights
        </h3>
        {returnFlights.map((flight, index) => (
          <FlightCard key={index} {...flight} />
        ))}
      </div>
    </div>
  );
};

export default FlightList;
