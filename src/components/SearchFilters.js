import React from 'react';
import { Search } from 'lucide-react';

const SearchFilters = ({ selectedStar, onStarChange }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mb-8">
      <div className="flex flex-wrap items-end gap-6">
        <div className="flex-1 min-w-[200px]">
          <label className="text-[10px] font-black text-gray-400 uppercase mb-2 block tracking-widest">
            Destination
          </label>
          <input
            type="text"
            defaultValue="Goa"
            className="w-full border border-gray-200 p-3 rounded-xl text-sm bg-gray-50 font-bold outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Hotel
          </label>
          <div className="flex gap-2">
            {['3★', '4★', '5★'].map((star) => (
              <button
                key={star}
                onClick={() => onStarChange(star)}
                className={`border px-4 py-2 rounded-xl text-xs font-black transition-all ${selectedStar === star ? 'bg-black text-white' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
              >
                {star}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-[#00204a] text-white p-3.5 rounded-xl hover:bg-black shadow-lg transition-all">
          <Search size={24} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
