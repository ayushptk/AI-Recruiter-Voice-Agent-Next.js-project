"use client";
import React from 'react';
import { Users, UserPlus, FolderKanban } from 'lucide-react';

const OverviewStats = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-end">
        {/* Left Section: Project Time / Distribution */}
        <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between text-sm text-gray-500">
                <div>Interviews</div>
                <div>Hired</div>
                <div>Project time</div>
                <div>Output</div>
            </div>
            <div className="flex gap-2 h-14 w-full">
                <div className="flex h-full w-[15%] items-center justify-center rounded-2xl bg-[#1f2937] text-white text-xs font-semibold">
                    15%
                </div>
                <div className="flex h-full w-[15%] items-center justify-center rounded-2xl bg-[#fcd34d] text-gray-900 text-xs font-semibold">
                    15%
                </div>
                <div className="relative flex h-full w-[60%] items-center rounded-2xl bg-[#e5e7eb] overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_25%,rgba(255,255,255,0.5)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.5)_75%,rgba(255,255,255,0.5)_100%)] bg-[length:20px_20px] opacity-30"></div>
                     <span className="ml-4 text-xs font-semibold text-gray-500 z-10">60%</span>
                </div>
                <div className="flex h-full w-[10%] items-center justify-center rounded-2xl border-2 border-gray-300 bg-transparent text-gray-500 text-xs font-semibold">
                    10%
                </div>
            </div>
        </div>

        {/* Right Section: Counters */}
        <div className="flex justify-between items-center lg:justify-end lg:gap-12">
            <div className="flex flex-col items-center">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-full bg-gray-100">
                        <Users className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-4xl font-light text-gray-800">78</span>
                 </div>
                 <span className="text-xs text-gray-500 font-medium">Employe</span>
            </div>
            <div className="flex flex-col items-center">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-full bg-gray-100">
                        <UserPlus className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-4xl font-light text-gray-800">56</span>
                 </div>
                 <span className="text-xs text-gray-500 font-medium">Hirings</span>
            </div>
            <div className="flex flex-col items-center">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-full bg-gray-100">
                        <FolderKanban className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-4xl font-light text-gray-800">203</span>
                 </div>
                 <span className="text-xs text-gray-500 font-medium">Projects</span>
            </div>
        </div>
    </div>
  );
};

export default OverviewStats;
