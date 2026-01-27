import React from 'react';
import { Plane } from 'lucide-react';

const FareSummary = () => {
  return (
    <div className="bg-[#0b2b5b] text-white p-8 rounded-3xl mb-10 relative overflow-hidden shadow-xl">
      <Plane className="rotate-90 opacity-10 absolute right-[-40px] top-[-20px]" size={300} />
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-[11px] opacity-60 uppercase font-black tracking-[4px] mb-2 text-blue-200">
            Total Round trip fare
          </p>
          <p className="text-6xl font-black italic tracking-tighter">₹210,600.00</p>
        </div>
        <div className="flex flex-col gap-3 min-w-[280px]">
          <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex justify-between items-center">
            <span className="text-xs font-bold">Outbound</span>
            <span className="font-black text-blue-300">₹105,300</span>
          </div>
          <div className="bg-white/10 p-4 rounded-xl border border-white/20 flex justify-between items-center">
            <span className="text-xs font-bold">Return</span>
            <span className="font-black text-orange-300">₹105,300</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareSummary;
