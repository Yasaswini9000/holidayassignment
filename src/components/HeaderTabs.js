import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const HeaderTabs = ({ activeHoliday, onHolidayChange }) => {
  return (
    <div className="bg-white px-10 pt-6 border-b sticky top-0 z-20 flex justify-between items-end">
      <div className="flex gap-10 mb-[-2px]">
        {['Indian', 'International'].map((type) => (
          <button
            key={type}
            onClick={() => onHolidayChange(type)}
            className={`pb-4 px-2 text-sm font-bold transition-all border-b-4 ${activeHoliday === type ? 'border-[#00cf8d] text-black' : 'border-transparent text-gray-400'}`}
          >
            {type} Holidays
          </button>
        ))}
      </div>
      <div className="pb-4 text-gray-400 cursor-pointer">
        <MoreHorizontal size={20} />
      </div>
    </div>
  );
};

export default HeaderTabs;
