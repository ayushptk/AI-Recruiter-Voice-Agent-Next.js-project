"use client";
import React from 'react';
import { ArrowUpRight, Play, Pause, RotateCcw } from 'lucide-react';

const TimeTracker = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden">
        <div className="flex justify-between items-start z-10">
           <h3 className="text-lg font-medium text-gray-800">Time tracker</h3>
           <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
               <ArrowUpRight className="w-4 h-4 text-gray-500" />
           </button>
       </div>

        <div className="flex-1 flex items-center justify-center my-4 z-10">
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Circular Progress SVG */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#f3f4f6"
                        strokeWidth="8"
                        fill="transparent"
                    />
                    <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#fcd34d"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray="351.86"
                        strokeDashoffset="100" // Adjust for progress
                        strokeLinecap="round"
                    />
                    {/* Tick marks */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <line
                            key={i}
                            x1="64"
                            y1="8"
                            x2="64"
                            y2="12"
                            transform={`rotate(${i * 30} 64 64)`}
                            stroke="#d1d5db"
                            strokeWidth="2"
                        />
                    ))}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-light text-gray-900">02:35</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Work Time</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-3 z-10">
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors text-gray-700">
                <Play className="w-4 h-4 fill-current ml-0.5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors text-gray-700">
                <Pause className="w-4 h-4 fill-current" />
            </button>
            <div className="flex-1"></div>
             <button className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center shadow-sm hover:bg-gray-800 transition-colors text-white">
                <RotateCcw className="w-4 h-4" />
            </button>
        </div>
    </div>
  );
};

export default TimeTracker;
