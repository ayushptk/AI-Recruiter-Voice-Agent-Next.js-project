"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from 'recharts';

const data = [
  { name: 'S', value: 20 },
  { name: 'M', value: 35 },
  { name: 'T', value: 25 },
  { name: 'W', value: 45 },
  { name: 'T', value: 30 },
  { name: 'F', value: 55, active: true },
  { name: 'S', value: 20 },
];

const ProgressCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
       <div className="flex justify-between items-start mb-2">
           <h3 className="text-lg font-medium text-gray-800">Progress</h3>
           <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
               <ArrowUpRight className="w-4 h-4 text-gray-500" />
           </button>
       </div>
       
       <div className="mb-6">
           <div className="flex items-baseline gap-2">
               <span className="text-3xl font-light text-gray-900">6.1 h</span>
               <span className="text-xs text-gray-500 font-medium">Work Time<br/>this week</span>
           </div>
       </div>

       <div className="h-32 w-full relative">
            {/* Custom Tooltip mimicking the design */}
            <div className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-[#fcd34d] text-[10px] font-bold px-2 py-1 rounded-md text-gray-900 z-10 shadow-sm">
                5h 23m
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 10, fill: '#9ca3af' }}
                        dy={10}
                    />
                    <Bar dataKey="value" radius={[20, 20, 20, 20]} barSize={8}>
                        {data.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={entry.active ? '#fcd34d' : '#1f2937'} 
                                className="transition-all duration-300 hover:opacity-80"
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
       </div>
    </div>
  );
};

export default ProgressCard;
