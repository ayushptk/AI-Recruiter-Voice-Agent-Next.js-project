"use client";
import React from 'react';
import { CheckCircle2, Circle, MessageSquare, Link as LinkIcon, Zap, Check, Monitor } from 'lucide-react';

const TaskList = () => {
  const tasks = [
    { type: 'interview', title: "Interview", time: "Sep 13, 08:30", icon: <Monitor className="w-3 h-3"/>, completed: true },
    { type: 'meeting', title: "Team Meeting", time: "Sep 13, 10:30", icon: <Zap className="w-3 h-3"/>, completed: true },
    { type: 'update', title: "Project Update", time: "Sep 13, 13:00", icon: <MessageSquare className="w-3 h-3"/>, completed: false },
    { type: 'goals', title: "Discuss Q3 Goals", time: "Sep 13, 14:45", icon: <Monitor className="w-3 h-3"/>, completed: false },
    { type: 'review', title: "HR Policy Review", time: "Sep 13, 16:30", icon: <LinkIcon className="w-3 h-3"/>, completed: false },
  ];

  return (
    <div className="bg-[#1f2937] rounded-3xl p-6 shadow-sm flex flex-col h-full text-white">
        <div className="flex justify-between items-end mb-6">
            <div>
                <h3 className="text-sm font-medium text-gray-300">Onboarding Task</h3>
            </div>
            <div className="text-2xl font-light">2/8</div>
        </div>

        <div className="flex-1 space-y-6 relative">
            {/* Connecting line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-700"></div>

            {tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${task.completed ? 'bg-transparent border-yellow-400 text-yellow-400' : 'bg-[#374151] border-transparent text-gray-400'}`}>
                         {/* Icons would function as task type indicators */}
                         {idx === 0 && <Monitor className="w-4 h-4" />}
                         {idx === 1 && <Zap className="w-4 h-4" />}
                         {idx === 2 && <MessageSquare className="w-4 h-4" />}
                         {idx === 3 && <Zap className="w-4 h-4" />}
                         {idx === 4 && <LinkIcon className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 pt-0.5">
                        <div className={`text-sm font-medium ${task.completed ? 'text-gray-200' : 'text-gray-200'}`}>{task.title}</div>
                        <div className="text-[10px] text-gray-500">{task.time}</div>
                    </div>
                    <div className="pt-1">
                        {task.completed ? (
                            <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                                <Check className="w-3 h-3 text-black" />
                            </div>
                        ) : (
                            <div className="w-5 h-5 rounded-full bg-[#374151]"></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TaskList;
