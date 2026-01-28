import React from 'react';
import FlightCard from './FlightCard';

const FlightList = () => {
  // 1. Data Object key names match ayyela chusukondi
  const outboundData = [
    { id: 1, airline: 'Air India Express', code: 'IX 2879', price: '105,300', depTime: '12:05', arrTime: '13:50', from: 'HYD', to: 'GOX', type: 'Publish', isSelected: true, logoBg: 'bg-orange-600', planeRotate: 'rotate-45' },
    { id: 2, airline: 'IndiGo', code: '6E 6512', price: '98,200', depTime: '06:30', arrTime: '08:15', from: 'HYD', to: 'GOX', type: 'Publish', isSelected: false, logoBg: 'bg-blue-800', planeRotate: 'rotate-45' },
    { id: 3, airline: 'Vistara', code: 'UK 872', price: '112,500', depTime: '15:20', arrTime: '17:10', from: 'HYD', to: 'GOX', type: 'SME', isSelected: false, logoBg: 'bg-purple-900', planeRotate: 'rotate-45' },
    { id: 4, airline: 'Air India', code: 'AI 440', price: '107,000', depTime: '18:45', arrTime: '20:30', from: 'HYD', to: 'GOX', type: 'Publish', isSelected: false, logoBg: 'bg-red-600', planeRotate: 'rotate-45' },
    { id: 5, airline: 'SpiceJet', code: 'SG 123', price: '95,000', depTime: '21:00', arrTime: '22:45', from: 'HYD', to: 'GOX', type: 'Publish', isSelected: false, logoBg: 'bg-amber-500', planeRotate: 'rotate-45' },
  ];

  const returnData = [
    { id: 6, airline: 'Air India', code: 'AI 879', price: '105,300', depTime: '20:00', arrTime: '21:45', from: 'GOX', to: 'HYD', type: 'SME', isSelected: true, logoBg: 'bg-red-700', planeRotate: 'rotate-[225deg]' },
    { id: 7, airline: 'SpiceJet', code: 'SG 441', price: '96,800', depTime: '22:15', arrTime: '00:05', from: 'GOX', to: 'HYD', type: 'Publish', isSelected: false, logoBg: 'bg-amber-400', planeRotate: 'rotate-[225deg]' },
    { id: 8, airline: 'Akasa Air', code: 'QP 1102', price: '101,400', depTime: '10:00', arrTime: '11:45', from: 'GOX', to: 'HYD', type: 'Publish', isSelected: false, logoBg: 'bg-orange-400', planeRotate: 'rotate-[225deg]' },
    { id: 9, airline: 'IndiGo', code: '6E 221', price: '99,000', depTime: '07:30', arrTime: '09:15', from: 'GOX', to: 'HYD', type: 'Publish', isSelected: false, logoBg: 'bg-blue-700', planeRotate: 'rotate-[225deg]' },
    { id: 10, airline: 'Vistara', code: 'UK 991', price: '115,000', depTime: '14:00', arrTime: '15:45', from: 'GOX', to: 'HYD', type: 'SME', isSelected: false, logoBg: 'bg-purple-800', planeRotate: 'rotate-[225deg]' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Outbound Column */}
      <div className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2 flex items-center gap-2">
          <span className="w-8 h-1 bg-blue-500 rounded-full"></span> Outbound Flights (5)
        </h3>
        {outboundData.map((flight) => (
          <FlightCard 
            key={flight.id}
            airline={flight.airline}
            code={flight.code}
            price={flight.price}
            depTime={flight.depTime} // flight.dep kaadu, flight.depTime ani undali
            arrTime={flight.arrTime} 
            from={flight.from}
            to={flight.to}
            type={flight.type}
            isSelected={flight.isSelected} // flight.selected kaadu
            logoBg={flight.logoBg} // flight.logo kaadu
            planeRotate={flight.planeRotate}
          />
        ))}
      </div>

      {/* Return Column */}
      <div className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2 flex items-center gap-2">
          <span className="w-8 h-1 bg-amber-500 rounded-full"></span> Return Flights (5)
        </h3>
        {returnData.map((flight) => (
          <FlightCard 
            key={flight.id}
            airline={flight.airline}
            code={flight.code}
            price={flight.price}
            depTime={flight.depTime}
            arrTime={flight.arrTime}
            from={flight.from}
            to={flight.to}
            type={flight.type}
            isSelected={flight.isSelected}
            logoBg={flight.logoBg}
            planeRotate={flight.planeRotate}
          />
        ))}
      </div>
    </div>
  );
};

export default FlightList;