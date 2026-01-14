"use client";
// Debug: Check if useUser is undefined
import { useUser } from "../../../provider";
import Image from "next/image";

function WelcomeContainer() {
    const { user } = useUser();

    // Show a loading or fallback UI while user data is not available
    if (user === null) {
        return (
            <div className="relative p-10 mb-8 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="flex justify-between items-center relative z-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back, Guest</h2>
                        <h2 className="text-indigo-100 text-lg">AI-Driven Interviews, Simplified, Hustle-Free Hiring</h2>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative p-10 mb-8 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative flex justify-between items-center z-10">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
                        Hello, {user?.name || 'Guest'}! 👋
                    </h2>
                    <p className="text-indigo-100 text-lg leading-relaxed">
                        Ready to streamline your hiring process? Start a new interview or check your scheduled calls.
                    </p>
                </div>
                {user?.picture && (
                     <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
                        <Image 
                            className="relative rounded-full border-4 border-white/30 hover:border-white transition-all duration-300 shadow-lg" 
                            src={user.picture} 
                            width={80} 
                            height={80} 
                            alt={'Welcome Image'} 
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default WelcomeContainer;
