import React from 'react';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import { Copy, Send, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

function InterviewCard({ interview, viewDetail=false }) {

  console.log("Interview Card are ..",interview);

  const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview?.interview_id; 

   const copyLink = () => {
      navigator.clipboard.writeText(url);
      toast('Link Copied');
    }

    const onSend = () => {
      window.location.href = 'mailto:' + interview?.userEmail + '?subject=' + interview?.jobPosition + '&body=' + interview?.jobDesc;
    }

    console.log("Interview duration are ..",interview.Duration);


  return (
    <div className={"group relative p-6 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"}>
       {/* Hover gradient effect */}
       <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
       
       <div className={"flex items-start justify-between relative z-10"}>
          <div>
            <h2 className={"text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-violet-600 transition-colors"}>{interview?.jobPosition}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
               {interview?.jobExperience} Years Experience
            </p>
          </div>
          <div className={"h-10 w-10 bg-violet-50 dark:bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-600 dark:text-violet-300"}>
             <span className="text-xs font-bold">{moment(interview?.created_at).format('DD MMM')}</span>
          </div>
       </div>

       <div className="mt-4 flex flex-wrap gap-2 relative z-10">
          <span className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
             {interview?.jobType || 'Full-time'}
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
             {interview?.jsonMockResp?.length || 0} Questions
          </span>
       </div>

       <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 relative z-10">
           {!viewDetail? 
           <div className={"flex gap-3 w-full"}>
            <Button variant={'outline'} className={"flex-1 rounded-xl hover:text-violet-600 hover:border-violet-200 hover:bg-violet-50"} onClick={() => copyLink()}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
            <Button className={"flex-1 rounded-xl bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-500/20 text-white"} onClick={() => onSend()}><Send className="w-4 h-4 mr-2" /> Invite</Button>
           </div>
           : 
           <Link href={'/schedule-interview/' + interview?.interview_id + '/details'} className="block">
            <Button className={"w-full rounded-xl bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all text-white"}><ArrowRight className="w-4 h-4 mr-2"/> View Feedback</Button>
           </Link>
           }
       </div>
    </div>
  )
}

export default InterviewCard;
