import { QUESTION_PROMPT } from "../../../../services/constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {

  const {jobPosition,jobDescription,Duration,type} = await req.json();

  if (!process.env.OPENROUTER_API_KEY) {
    return NextResponse.json({ error: "API key is missing. Please set OPENROUTER_API_KEY environment variable." }, { status: 401 });
  }

  const Final_PROMPT = QUESTION_PROMPT.replace('{{jobTitle}}',jobPosition)
  .replace('{{jobDescription}}',jobDescription)
  .replace('{{Duration}}',Duration)
  .replace('{{type}}',type);

  console.log(Final_PROMPT);

  try{
    const openai = new OpenAI({

      baseURL: "https://openrouter.ai/api/v1",

      apiKey: process.env.OPENROUTER_API_KEY
    })

    const completion = await openai.chat.completions.create({
      model: "google/gemma-3n-e4b-it:free",
      messages: [
        {
          "role": "user",
          "content": Final_PROMPT
        }
      ],
     
    });

    console.log(completion.choices[0].message);
    return NextResponse.json({ data: completion.choices[0].message });
  }

  catch(error){
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
