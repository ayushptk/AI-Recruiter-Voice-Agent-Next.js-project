import React from "react";
import WelcomeContainer from "./_components/welcomecontainer";
import CreateOptions from "./_components/CreateOptions";
import LatestInterviewsList from "./_components/latestinterview";

function Dashboard() {
    return (
        
            <div>
     
           
           <h1 className="text-2xl font-bold  ">Dashboard</h1>
           <CreateOptions />
           <LatestInterviewsList />  
           </div>
           
        
        
    )
}

export default Dashboard;