"use client";
// Debug: Check if useUser is undefined
import { useUser } from "../../../provider";
import Image from "next/image";

function WelcomeContainer () {
    const { user } = useUser();

    // Show a loading or fallback UI while user data is not available
    if (user === null) {
        return (
            <div className={"p-5 mb-5 rounded-xl flex justify-between items-center"} style={{ backgroundColor: 'rgba(255, 255, 255)' }}>
                <div>
                    <h2 className={"text-medium font-bold"}>Welcome Back, Guest</h2>
                    <h2 className={"text-gray-500 text-sm"}>AI-Driven Interviews, Simplified, Hustle-Free Hiring</h2>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className={"p-5 mb-5 rounded-xl flex justify-between items-center"} style={{ backgroundColor: 'rgba(255, 255, 255)' }}>
                <div>
                    <h2 className={"text-medium font-bold"}>Welcome Back, {user?.name || 'Guest'}</h2>
                    <h2 className={"text-gray-500 text-sm"}>AI-Driven Interviews, Simplified, Hustle-Free Hiring</h2>
                </div>
                {user?.picture && <Image className="rounded-full" src={user.picture} width={40} height={40} alt={'Welcome Image'} />}
            </div>
        </div>
    )
}

export default WelcomeContainer;
