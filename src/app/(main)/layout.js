import { Divide } from "lucide-react";
import React from "react";
import DashboardProvider from "./provider";
import Provider from "../provider";

import { Toaster } from "@/components/ui/sonner"

function DashboardLayout({children}) {
    return (
        <Provider>
            <div className="bg-secondary">
                <DashboardProvider>
                    <div className="">
                        {children}
                        <Toaster />
                    </div>
                </DashboardProvider>
            </div>
        </Provider>
    )
}

export default DashboardLayout
