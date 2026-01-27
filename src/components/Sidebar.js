import React from 'react';
import {
  Home, Filter, Map, Cloud, Ticket, Calculator, BarChart2, Headphones,
  Settings, GitBranch, UserCheck, Inbox, Users, Landmark, Briefcase
} from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <aside className="w-[260px] bg-white border-r flex flex-col p-4 shadow-sm overflow-y-auto">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 bg-[#00cf8d] rounded-md flex items-center justify-center text-white font-bold italic text-xl">g</div>
        <h1 className="text-2xl font-black tracking-tighter">gogaga</h1>
      </div>
      <nav className="space-y-1">
        <p className="text-[10px] font-bold text-[#b4bdc6] uppercase mb-2 px-3 tracking-widest">Main Menu</p>
        <SidebarItem icon={Home} label="Dashboard" showArrow />
        <SidebarItem icon={Filter} label="Leads" active badge="30434" showArrow />
        <SidebarItem icon={Map} label="Itineraries" />
        <SidebarItem icon={Cloud} label="Reviews" />
        <SidebarItem icon={Ticket} label="Vouchers" showArrow />
        <SidebarItem icon={Calculator} label="Accounts" showArrow />
        <SidebarItem icon={BarChart2} label="Reports" showArrow />
        <SidebarItem icon={Headphones} label="Support" />

        <p className="text-[10px] font-bold text-[#b4bdc6] uppercase mb-2 px-3 mt-6 tracking-widest">Control</p>
        <SidebarItem icon={Settings} label="Settings" showArrow />
        <SidebarItem icon={GitBranch} label="Masters" showArrow />
        <SidebarItem icon={UserCheck} label="HRM" showArrow />
        <SidebarItem icon={Inbox} label="Assets" showArrow />

        <p className="text-[10px] font-bold text-[#b4bdc6] uppercase mb-2 px-3 mt-6 tracking-widest">Network</p>
        <SidebarItem icon={Users} label="Customers" />
        <SidebarItem icon={Landmark} label="Partners" />
        <SidebarItem icon={Briefcase} label="Suppliers" showArrow />
      </nav>
    </aside>
  );
};

export default Sidebar;
