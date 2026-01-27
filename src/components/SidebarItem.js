import React from 'react';
import { ChevronRight } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, badge, showArrow }) => (
  <div className={`flex items-center justify-between p-2.5 rounded-md cursor-pointer transition-all ${active ? 'bg-[#f0f4ff] text-[#4e73df] font-bold' : 'text-[#616e87] hover:bg-gray-50'}`}>
    <div className="flex items-center gap-3">
      <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
      <span className="text-[13px]">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {badge && <span className="bg-[#e2f7ed] text-[#28c76f] text-[10px] px-1.5 py-0.5 rounded-sm font-bold">{badge}</span>}
      {showArrow && <ChevronRight size={14} className="opacity-40" />}
    </div>
  </div>
);

export default SidebarItem;
