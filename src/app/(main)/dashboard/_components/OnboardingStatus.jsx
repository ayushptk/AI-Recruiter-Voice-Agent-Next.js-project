"use client";
import React from 'react';

const OnboardingStatus = () => {
    // Determine heights for columns based on image
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
       <div className="flex justify-between items-start mb-4">
           <h3 className="text-lg font-medium text-gray-800">Onboarding</h3>
           <span className="text-2xl font-light text-gray-900">18%</span>
       </div>
       
       <div className="flex gap-8 text-xs font-medium text-gray-500 mb-2">
            <div>30%</div>
            <div>25%</div>
            <div>0%</div>
       </div>

       <div className="flex gap-2 h-12">
            <div className="flex-1 bg-[#fcd34d] rounded-xl flex items-center justify-center">
                <span className="text-xs font-medium text-gray-800">Task</span>
            </div>
             <div className="w-[35%] bg-[#1f2937] rounded-xl"></div>
             <div className="w-[15%] bg-gray-400 rounded-xl"></div>
       </div>
    </div>
  );
};

export default OnboardingStatus;
