import { Input } from "@/components/ui/input";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InterviewType } from "../../../../../../services/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FormContainer = ({onHandleInputChange}) => {
    return (
        <div className="p-5 bg-white rounded-lg">
            <div>
                <h2 className="text-sm">Job Position</h2>
                <Input placeholder="eg:-Full Stack Developer" className="mt-2" onChange={(event)=>onHandleInputChange('jobPosition',event.target.value)}/>
            </div>

            <div className="mt-5">
                <h2 className="text-sm">Job Description</h2>
          <Textarea placeholder="Enter Job Description" className="h-[200px]"/>
            </div>

             <div className="mt-5">
                <h2 className="text-sm">Interview Duration</h2>
                <Select>
  <SelectTrigger className="w-full mt-2">
    <SelectValue placeholder="Select Duration" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="5 Min">5 Min</SelectItem>
    <SelectItem value="15 Min">15 Min</SelectItem>
    <SelectItem value="30 Min">30 Min</SelectItem>
      <SelectItem value="45 Min">45 Min</SelectItem>
      <SelectItem value="60 Min">60 Min</SelectItem>
    
  </SelectContent>
</Select>
          
          
            </div>

             <div className="mt-5">
                <h2 className="text-sm">Interview types</h2>
                 <div className="flex gap-3 flex-wrap mt-2">
                  {InterviewType.map((type,index) => (
                    <div className="flex items-center gap-2 mt-2 p-1 px-2 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-100" key={index}>
                     <type.icon className="w-4 h-4" />
                      <span>{type.title}</span>
                    </div>
                  ))}
                 </div>
            </div>
            <div className="mt-5 flex justify-end">
            <Button>Generated Questions <ArrowRight /></Button>
            </div>

        </div>
    );
};

export default FormContainer;