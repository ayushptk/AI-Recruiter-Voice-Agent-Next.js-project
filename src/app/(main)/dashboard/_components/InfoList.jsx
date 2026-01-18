"use client";
import React from 'react';
import { ChevronDown, ChevronRight, Laptop, Monitor } from 'lucide-react';

const InfoList = () => {
  const items = [
    { title: "Pension contributions", active: false },
    { title: "Devices", active: true, content: { name: "MacBook Air", version: "Version M1", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" } },
    { title: "Compensation Summary", active: false },
    { title: "Employee Benefits", active: false },
  ];

  return (
    <div className="bg-[#fdfaf6] rounded-3xl p-6 shadow-sm flex flex-col gap-4">
       {items.map((item, idx) => (
           <div key={idx} className="border-b border-gray-200/50 last:border-0 pb-4 last:pb-0">
               <div className="flex justify-between items-center cursor-pointer group">
                   <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.title}</span>
                   {item.active ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
               </div>
               
               {item.active && item.content && (
                   <div className="mt-4 flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="w-10 h-8 relative rounded-md overflow-hidden bg-gray-100">
                             <img src={item.content.image} alt="Device" className="object-cover w-full h-full" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-800">{item.content.name}</div>
                            <div className="text-[10px] text-gray-500">{item.content.version}</div>
                        </div>
                         <button className="text-gray-400 hover:text-gray-600">
                            <div className="w-1 h-1 bg-current rounded-full mb-0.5"></div>
                            <div className="w-1 h-1 bg-current rounded-full mb-0.5"></div>
                            <div className="w-1 h-1 bg-current rounded-full"></div>
                        </button>
                   </div>
               )}
           </div>
       ))}
    </div>
  );
};

export default InfoList;
