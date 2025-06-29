'use client'
import axios from "axios";
import { Loader2, Loader2Icon } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuestionListContainer from "./QuestionListcontainer";
import { supabase } from "../../../../../../services/supabaseClient";
import { useUser } from "@/app/provider";
import { v4 as uuidv4 } from 'uuid';

function QuestionList ({formData,onCreateLink}){

    const [loading, setLoading] = useState(false);
    const [questionList, setQuestionList] = useState();
    const{user}=useUser();
    const [saveLoading,setSaveLoading]= useState(false);

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

            console.log("RESULT DATA ARE ", result.data);
            const Content = result.data.data.content;
            // Remove markdown code block delimiters if present
            const Final_JSON = Content.startsWith("```json\n") && Content.endsWith("\n```")
                ? Content.slice(7, -4)
                : Content;
            console.log("content are " + Content);
            console.log("Final JSON string:", Final_JSON);

            const parsedJSON = JSON.parse(Final_JSON);
            console.log("Parsed JSON object:", parsedJSON);

         const parsedQuestions = parsedJSON?.interviewQuestions;
         console.log("Parsed Questions:", parsedQuestions);
         setQuestionList(parsedQuestions);
            // Remove markdown code block delimiters if present
            // Remove markdown code block delimiters if present
         setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast("Error generating questions: " + error.message);
        }
    }

    const onFinish= async()=>{
        setSaveLoading(true);
        const interview_id = uuidv4();


     const { data, error } = await supabase
  .from('interviews')
  .insert([
    { 
        ...formData,
        questionlist: questionList,
        userEmail: user?.email ,
        interview_id:interview_id
     },
  ])
  .select()
  setSaveLoading(false);
  console.log(data);

  onCreateLink(interview_id);
    }
    return(
        <div>
            {loading && 
            <div className="p-5 bg-blue-50 rounded-xl border border-primary-200 flex">
                <Loader2Icon className="animate-spin" />
                <div>
                   <h2>Generating Questions.............</h2>
                   <p className="text-primary">Our AI model is generating questions</p>
                </div>

            </div>
            }

                     {
                questionList?.length > 0 &&
                <div>
                   <QuestionListContainer questionList={questionList} />
                </div>

                }
                <div className="flex justify-end p-4"> 
                    <Button onClick={()=>onFinish()} disabled={saveLoading}>
                        { saveLoading && <Loader2  className="animate-spin"/>}
                        Create Interview Link and Finish</Button>
                </div>


        </div>
    )

}

export default QuestionList;
