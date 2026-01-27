import React from 'react';
import { Plane, Briefcase, Inbox } from 'lucide-react';

const FlightCard = ({ airline, code, price, depTime, arrTime, from, to, type, isSelected, logoBg, planeRotate }) => (
  <div className={`bg-white p-6 rounded-2xl border-2 transition-all group cursor-pointer relative mb-5 ${isSelected ? 'border-blue-500 shadow-md' : 'border-transparent hover:border-gray-200 shadow-sm'}`}>
    {isSelected && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase italic">
        Selected
      </div>
    )}

    {/* Top: Logo, Name, and Price */}
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 ${logoBg} rounded-lg flex items-center justify-center font-black italic shadow-sm text-white text-xs`}>
          {airline.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="font-black text-sm text-gray-800">{airline}</p>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{code} • Economy</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[#4e73df] font-black text-2xl tracking-tighter">₹{price}</p>
        <span className={`text-[9px] px-2 py-0.5 rounded font-black border uppercase ${type === 'SME' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
          {type} Rate
        </span>
      </div>
    </div>

    {/* Center: Timings and Duration */}
    <div className="flex justify-between items-center text-center py-5 border-t border-b border-dashed border-gray-100 my-4">
      <div className="text-left">
        <p className="text-2xl font-black text-gray-900">{depTime}</p>
        <p className="text-[10px] text-gray-400 font-black tracking-widest">{from}</p>
      </div>
      <div className="flex-1 px-4 relative">
        <p className="text-[9px] font-black text-gray-300 uppercase mb-1">01h 45m</p>
        <div className="h-[2px] bg-gray-100 w-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
            <Plane size={12} className={`text-gray-300 ${planeRotate}`} />
          </div>
        </div>
        <p className="text-[9px] font-bold text-green-500 mt-1 uppercase">Non-stop</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-black text-gray-900">{arrTime}</p>
        <p className="text-[10px] text-gray-400 font-black tracking-widest">{to}</p>
      </div>
    </div>

    {/* Bottom: Baggage and Rules */}
    <div className="flex justify-between items-center">
      <div className="flex gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
        <span className="flex items-center gap-1">
          <Briefcase size={13} className="text-gray-300" /> 7 Kg
        </span>
        <span className="flex items-center gap-1">
          <Inbox size={13} className="text-gray-300" /> 15-20 Kg
        </span>
        <span className="text-orange-400 italic ml-2">Refundable</span>
      </div>
      {!isSelected && (
        <button className="bg-gray-900 text-white text-[10px] font-black px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-black">
          SELECT
        </button>
      )}
    </div>
  </div>
);

export default FlightCard;
