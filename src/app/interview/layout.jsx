'use client'
import React, { useState } from "react";
import InterviewHeader from "./_components/interviewHeader";
import { InterviewDataContext } from "../../../context/interviewDatacontext";

function InterviewLayout({children}){

    const [interviewInfo,SetInterviewInfo] = useState();
    return(
        <InterviewDataContext.Provider value={{interviewInfo,SetInterviewInfo}}> 
        <div>
            <InterviewHeader />
           {children}
        </div>
        </InterviewDataContext.Provider>
    )
}

export default InterviewLayout;