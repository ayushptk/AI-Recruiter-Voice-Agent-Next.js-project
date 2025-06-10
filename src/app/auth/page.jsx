'use client'
import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button"
import { supabase } from '../../../services/supabaseClient';

function Login () {
  const SignInwithGoogle= async()=>{
    // implement google sign in logic here
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      
    })
    if(error){
      console.log("Errro aayo rey",error)
    }
  }
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='flex flex-col items-center border rounded-2xl p-8' >
           <div>
             <Image src="/logo.png" alt="Logo" width={400} height={100}  className='w-[180px] '/>
           </div>
            <div>
             <Image src="/loginimage.png" alt="Logo" width={400} height={400}  className='w-[350px] h-[250px] rounded-2xl'/>
           </div>
           <h2 className="text-2xl font-bold text-center mt-1.5">
            Welcome to Ai Recruiter
          </h2>

           <p className="text-gray-500 text-center">
            Sign in With Google Authentication
          </p>

           <Button className="mt-7 w-full" onClick={SignInwithGoogle}>
            Login with Google
          </Button>
           

           </div>

        </div>
    );
} 

export default Login;
