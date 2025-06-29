'use client'
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function QuestionList ({formData}){

    const [loading, setLoading] = useState(false);
    const [questionList, setQuestionList] = useState();

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

    const onFinish=()=>{
        console.log("Form submitted");
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
                <div className="p-5 border border-gray-300 rounded-xl bg-white ">
                    {questionList.map((item,index)=>{
                        console.log("Rendering question item:", item);
                        return (
                            <div key={index} className="p-3 border border-gray-200 display">
                                <h2 className="font-bold">{item.question}</h2>
                                <h2 className="text-primary">Type:{item.type}</h2>
                            </div>
                        );
                    })}
                </div>

                }
                <div className="flex justify-end p-4"> 
                    <Button onClick={()=>onFinish()}>Finish</Button>
                </div>


        </div>
    )

}

export default QuestionList;
