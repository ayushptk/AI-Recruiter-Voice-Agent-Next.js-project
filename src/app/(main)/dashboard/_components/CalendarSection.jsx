"use client";
import React from 'react';

const CalendarSection = () => {
    const days = [
        { day: 'Mon', date: 22 },
        { day: 'Tue', date: 23 },
        { day: 'Wed', date: 24, active: true },
        { day: 'Thu', date: 25 },
        { day: 'Fri', date: 26 },
        { day: 'Sat', date: 27 },
    ];

  return (
    <div className="bg-[#fdfaf6] rounded-3xl p-6 shadow-sm col-span-1 lg:col-span-2 relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
                 <button className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-gray-700 shadow-sm">
                    August
                 </button>
            </div>
            <h3 className="text-sm font-medium text-gray-600">September 2024</h3>
            <button className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-gray-700 shadow-sm">
                October
            </button>
        </div>

        <div className="grid grid-cols-6 gap-2 mb-8 text-center">
            {days.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-xs text-gray-500 font-medium">{d.day}</span>
                    <span className={`text-sm font-semibold ${d.active ? 'text-gray-900' : 'text-gray-400'}`}>
                        {d.date}
                    </span>
                    {/* Vertical dashed line simulation */}
                    <div className="h-24 border-l border-dashed border-gray-200 w-px mt-2 relative group">
                        {d.day === 'Mon' && (
                             <div className="absolute top-8 left-2 text-[10px] text-gray-400 w-max">8:00 am</div>
                        )}
                        {/* Event items absolute positioned or layout based? Hardcoding per image for the replica */}
                         {d.day === 'Wed' && (
                           <div className="absolute top-10 left-[-60px] w-48 z-10">
                                <div className="bg-[#1f2937] text-white p-3 rounded-xl shadow-lg flex items-center gap-3">
                                   <div className="flex-1">
                                       <div className="text-xs font-bold">Weekly Team Sync</div>
                                       <div className="text-[9px] text-gray-400">Discuss progress on projects</div>
                                   </div>
                                   <div className="flex -space-x-2">
                                       <div className="w-5 h-5 rounded-full bg-red-400 border border-[#1f2937]"></div>
                                       <div className="w-5 h-5 rounded-full bg-blue-400 border border-[#1f2937]"></div>
                                       <div className="w-5 h-5 rounded-full bg-green-400 border border-[#1f2937]"></div>
                                   </div>
                                </div>
                                <div className="absolute left-[64px] -top-1 w-2 h-2 bg-[#1f2937] rounded-full"></div>
                           </div>
                         )}

                         {d.day === 'Fri' && (
                            <div className="absolute top-20 left-[-80px] w-48 z-10">
                                <div className="bg-white p-2 rounded-xl shadow-md border border-gray-100 flex items-center gap-2">
                                     <div className="flex-1">
                                        <div className="text-xs font-bold text-gray-800">Onboarding Session</div>
                                        <div className="text-[9px] text-gray-500">Introduction for new hires</div>
                                     </div>
                                      <div className="flex -space-x-1">
                                        <div className="w-5 h-5 rounded-full bg-purple-400"></div>
                                        <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                                      </div>
                                </div>
                                <div className="absolute left-[85px] -top-1 w-2 h-2 bg-gray-300 rounded-full"></div>
                            </div>
                         )}
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  );
};

export default CalendarSection;
