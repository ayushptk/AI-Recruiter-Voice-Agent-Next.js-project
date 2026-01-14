'use client'
import React, { useEffect, useState } from 'react';
import { Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '../../../../../services/supabaseClient';
import { useUser } from '@/app/provider';
import InterviewCard from './Interviewcard';


function LatestInterviewsList() {

    const [ InterviewList, setInterviewList ] = useState([]);
    console.log("Interview List are...",InterviewList);
    const {user} = useUser();

    console.log("user are  in interviewss",user);
    useEffect(() => {
      user && GetInterviewList();
    }, [user])

    const GetInterviewList = async () => {
       let { data: Interviews, error } = await supabase
          .from('interviews')
          .select('*') 
          .eq('userEmail', user?.email)
          .order('id', { ascending: false })
          .limit(6)

          console.log( "Interviews are...",Interviews);
          setInterviewList(Interviews);

    }
  

  return (
    <div className='my-10'>
      <h2 className='font-bold text-3xl text-gray-800 dark:text-white mb-6'>Recent Activity</h2>

      {InterviewList?.length == 0 ? (
        <div className='p-12 flex flex-col gap-5 items-center justify-center mt-5 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300'>
          <div className="p-6 bg-violet-50 dark:bg-violet-900/20 rounded-full">
            <Video className='h-12 w-12 text-violet-400' /> 
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">No Interviews Recorded Yet</h2>
            <p className="text-gray-500 max-w-sm">Detailed analytics and recordings of your interviews will appear here once you start.</p>
          </div>
          
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {InterviewList.map((interview, index) => (
            <InterviewCard interview={interview} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default LatestInterviewsList;
