'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { supabase } from '../../../services/supabaseClient'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'

function Login() {
  const SignInwithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      }
    })
    if (error) {
      console.log("Error logging in:", error)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-neutral-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-500/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-blue-500/20 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl grid md:grid-cols-2 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden min-h-[600px] mx-4 z-10"
      >
        {/* Left Side - Visual */}
        <div className="relative hidden md:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative z-10"
            >
                <div className="w-64 h-64 bg-white/10 rounded-full absolute -top-10 -left-10 blur-3xl" />
                <Image 
                    src="/loginimage.png" 
                    alt="Illustration" 
                    width={400} 
                    height={400} 
                    className="object-contain drop-shadow-2xl relative z-20 transform hover:scale-105 transition-transform duration-500 rounded-lg" 
                />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 mt-8 text-center"
            >
                <h3 className="text-3xl font-bold mb-2">AI Recruiter Agent</h3>
                <p className="text-blue-100 max-w-sm">
                    Streamline your hiring process with intelligent automation. 
                    Experience the future of recruitment today.
                </p>
            </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center items-center p-8 md:p-12 relative">
           <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 mb-6 shadow-lg shadow-blue-500/20 p-2"
                    >
                        <Image src="/logo.png" alt="Logo" width={60} height={60} className="w-full h-full object-contain invert brightness-0 dark:brightness-200" />
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        Welcome Back
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                        Please sign in to your account
                    </motion.p>
                </div>

                <div className="mt-8 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                         <Button 
                            className="w-full h-12 text-base font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group bg-white dark:bg-neutral-800 text-gray-900 dark:text-white border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer" 
                            onClick={SignInwithGoogle}
                            variant="outline"
                        >
                            <FcGoogle className="mr-3 h-6 w-6" />
                            Continue with Google
                            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-blue-500/10 transition-all duration-300" />
                        </Button>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200 dark:border-neutral-700" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-gray-50 dark:bg-neutral-900 px-2 text-gray-500 backdrop-blur-sm">
                                Secure Authentication
                            </span>
                        </div>
                    </div>
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500"
                >
                    By clicking "Continue", you agree to our <a href="#" className="underline hover:text-blue-500">Terms of Service</a> and <a href="#" className="underline hover:text-blue-500">Privacy Policy</a>.
                </motion.p>
           </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
