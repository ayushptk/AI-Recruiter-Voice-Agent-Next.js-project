import { Divide } from "lucide-react";
import React from "react";
import DashboardProvider from "./provider";
import Provider from "../provider";

function DashboardLayout({children}) {
    return (
        <Provider>
            <div className="bg-secondary">
                <DashboardProvider>
                    <div className="p-10">
                        {children}
                    </div>
                </DashboardProvider>
            </div>
        </Provider>
    )
}

export default DashboardLayout
