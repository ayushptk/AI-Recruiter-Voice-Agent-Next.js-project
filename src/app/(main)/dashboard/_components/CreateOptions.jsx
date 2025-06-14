import { Phone, Video } from 'lucide-react'
import React from 'react'
function CreateOptions(){
    return (
        <div className='grid grid-cols-2 gap-5'>
           <div className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5'>
            <Video  className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'/>
               <h2 className='fongt-bold'>Create New Interview</h2>
               <p className='text-gray-500'>Create Ai interview</p>

           </div>
           <div className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5'>
            <Phone  className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'/>
               <h2 className='fongt-bold'>Create Phone Screening Call</h2>
               <p className='text-gray-500'>Scheduled Phone Screening Call with candidate</p>

           </div>
        </div>
    )
}

export default CreateOptions