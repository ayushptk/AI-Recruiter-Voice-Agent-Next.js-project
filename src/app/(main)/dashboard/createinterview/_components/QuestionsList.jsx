'use client'
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { useState } from "react";

function QuestionList ({formData}){

    const [loading, setLoading] = useState(false);

   
        useEffect(()=>{
            if(formData){
                GenerateAiQuestionList();
            }

        },[formData])
    

    const GenerateAiQuestionList= async()=>{
        setLoading(true);
        try {
            const result = await axios.post("/api/ai-model",{
                ...formData
            })

            console.log(result.data);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast("Error generating questions",error);
        }
    }

    
   
    return(
        <div>
            {loading && 
            <div className="p-5 bg-blue-50 rounded-xl border border-gray-200 flex">
                <Loader2Icon className="animate-spin" />
                <div>
                   <h2>Generating Questions.............</h2>
                   <p>Our AI model is generating questions</p>
                </div>
            </div>
            }
        </div>
    )

}

export default QuestionList;