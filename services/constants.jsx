import { Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";

export const SideBaroptions=[
    {
        name:'Dashboards',
        icon:LayoutDashboard,
        path:'/dashboard' 
    },
    {
        name:'Schedule Interview',
        icon:Calendar,
        path:'/schedule-interview'
        },

        {
            name:'All Interviews',
            icon:List,
            path:'/all-interview'
            },

            {
                name:'Billing',
                icon:WalletCards,
                path:'/billing'
            },
            {
                name:'Settings',
                icon:Settings,
                path:'/settings'
            }




]