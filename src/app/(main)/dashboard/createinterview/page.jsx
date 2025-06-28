'use client';
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import FormContainer from "./_components/formContainer";
import QuestionList from "./_components/QuestionsList";
import { toast } from "sonner";



function Createinterview() {
  const router = useRouter();
  const[step, setStep] = useState(1);

  const [formData,setFormData]= useState();
  const onHandleInputChange = (field,value)=>{
    // console.log(field,value);
    setFormData((prevData)=>
      ({...prevData,
        [field]:value})
    );

    console.log("Form Data are....",formData);
  }

  const onGoToNext=()=>{
   if(!formData.jobPosition||!formData.jobDescription||!formData.Duration||!formData.type){
    toast("Please enter the fulll deatils...")
 
     return ;
    
   }
   else{
setStep(step+1);

   }
   
  }
    return (
        <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-56">
          <div className="flex gap-5">
            <ArrowLeft onClick={() => router.back()}  className="cursor-pointer"/>
            <h2>Create Interview</h2>   
          </div>

          <Progress value={ step* 33} className="my-5"/>
         {step==1? <FormContainer onHandleInputChange={onHandleInputChange}  GoToNext={()=>onGoToNext()}/> 
          :step==2?<QuestionList  formData={formData} />:null}
            
            
        </div>
    );
}

export default Createinterview;