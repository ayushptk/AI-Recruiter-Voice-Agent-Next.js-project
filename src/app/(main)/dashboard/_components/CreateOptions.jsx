'use client'
import { Phone, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Progress } from "@/components/ui/progress"
function CreateOptions(){
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
             <Link href={'/dashboard/createinterview'} className="group block">
           <div className='relative h-full bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-violet-500/50 cursor-pointer overflow-hidden'>
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all"></div>
            
            <div className='p-4 bg-violet-50 dark:bg-violet-900/20 w-fit rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner'>
                <Video  className='text-violet-600 dark:text-violet-300 h-8 w-8'/>
            </div>
               <h2 className='text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors'>Create New Interview</h2>
               <p className='text-gray-500 dark:text-gray-400 leading-relaxed'>Start a new AI-driven interview session to screen candidates efficiently.</p>
           </div>
             </Link>
           
           <div className='relative h-full bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-pink-500/50 cursor-pointer overflow-hidden group'>
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all"></div>

            <div className='p-4 bg-pink-50 dark:bg-pink-900/20 w-fit rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner'>
                <Phone  className='text-pink-600 dark:text-pink-300 h-8 w-8'/>
            </div>
               <h2 className='text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors'>Create Phone Screening</h2>
               <p className='text-gray-500 dark:text-gray-400 leading-relaxed'>Schedule and manage phone screening calls with your candidates.</p>
           </div>
        </div>
    )
}

export default CreateOptions