import React from 'react';
import { Plane, Clock } from 'lucide-react';

const RouteInfo = () => {
  return (
    <div className="bg-white px-10 py-6 rounded-2xl border border-gray-100 shadow-sm mb-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-gray-400 uppercase mb-1">From</span>
          <span className="text-xl font-black text-[#00204a]">Hyderabad (HYD)</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-gray-400 uppercase mb-1">Departure</span>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-gray-400" />
            <span className="text-xs font-bold">Mar 12, 2026</span>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-blue-50 p-2 rounded-full">
            <Plane size={18} className="text-blue-500 rotate-45" />
          </div>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[10px] font-black text-gray-400 uppercase mb-1">To</span>
          <span className="text-xl font-black text-[#00204a]">Goa (GOX)</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[10px] font-black text-gray-400 uppercase mb-1">Return</span>
          <div className="flex items-center gap-2 justify-end">
            <Clock size={14} className="text-gray-400" />
            <span className="text-xs font-bold">Mar 15, 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteInfo;
