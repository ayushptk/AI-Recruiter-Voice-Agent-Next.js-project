import { Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";
import { Code2Icon , User2Icon, BriefcaseBusinessIcon, Puzzle, ShieldCheck} from 'lucide-react';


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


export const InterviewType = [
    {
        title: "Technical",
        icon: Code2Icon
    },
    {
        title: "Behavioral",
        icon: User2Icon
    },
    {
        title: "Experience",
        icon: BriefcaseBusinessIcon
    },
    {
        title: "Problem Solving",
        icon: Puzzle
    },
    {
        title: "Leadership",
        icon: ShieldCheck
    }
]
