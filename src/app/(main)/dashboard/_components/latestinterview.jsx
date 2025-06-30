'use client'
import React, { useEffect, useState } from 'react';
import { Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '../../../../../services/supabaseClient';
import { useUser } from '@/app/provider';
import InterviewCard from './Interviewcard';


function LatestInterviewsList() {

    const [ InterviewList, setInterviewList ] = useState([]);
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
    <div className={"my-5"}>
      <h2 className={"font-bold text-2xl"}>Interview Records</h2>

      {InterviewList?.length == 0 && (
        <div className={"p-5 flex flex-col gap-3 items-center mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"}>
          <Video className={"h-10 w-10 text-primary"} /> 
          <h2>No Interviews Found</h2>
          <Button>+ Create New Interview</Button>
        </div>
      )}

      {InterviewList && 
        <div className={"grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-5"}>
          {InterviewList.map((interview, index) => (
            <InterviewCard interview={interview} key={index} />
          ))}
        </div>
      } 

    </div>
  )
}

export default LatestInterviewsList;
