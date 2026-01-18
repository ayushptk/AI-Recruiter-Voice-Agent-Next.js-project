"use client";
import React from 'react';
import Image from 'next/image';

const ProfileCard = () => {
    // Using a placeholder image if no dynamic data is passed yet
    // In a real app, props would simulate this
  return (
    <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group">
      {/* Background Image/Placeholder */}
      <div className="absolute inset-0 bg-gray-200">
         <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" 
            alt="Profile Layer" 
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
         />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
         <div className="flex justify-between items-end">
            <div>
                <h3 className="text-white text-xl font-medium mb-1">Lora Piterson</h3>
                <p className="text-white/80 text-sm">UX/UI Designer</p>
            </div>
            <div className="bg-[#5c4d46] backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                <span className="text-white font-medium">$1,200</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProfileCard;
