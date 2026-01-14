import React from "react";
import WelcomeContainer from "./_components/welcomecontainer";
import CreateOptions from "./_components/CreateOptions";
import LatestInterviewsList from "./_components/latestinterview";

function Dashboard() {
    return (
        <div className="p-6 md:p-10 min-h-screen">
           <WelcomeContainer />
           
           <div className="mt-10">
             <CreateOptions />
           </div>
           
           <div className="mt-10">
             <LatestInterviewsList />
           </div>
        </div>
    )
}

export default Dashboard;