'use client'
import Image from "next/image";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SideBaroptions } from "../../../../services/constants";
import { usePathname } from "next/navigation";

 function AppSidebar() {
const path = usePathname();
console.log("path",path)
  
  return (
    
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center" >
        <Image src="/logo.png" alt="Logo" width={400} height={100}  className='w-[120px] '/>
        <Button className = 'w-full mt-5'> <Plus /> Create New Interview</Button>
        </SidebarHeader >

      <SidebarContent>

        <SidebarGroup>
            <SidebarContent>
                <SidebarMenu>
                    {SideBaroptions.map((options,index)=>(
                      
                       <SidebarMenuItem key={index} className='p-1'>
                        <SidebarMenuButton asChild className={`p-5 ${path === options.path && "bg-blue-50"}`}> 
                            <Link href={options.path}>
                            <options.icon className={` ${path === options.path && "text-primary"}`}/>
                            <span className={`text-[16px] ${path === options.path && "text-primary"}`}>{options.name}</span>

                        
                            </Link>
                        </SidebarMenuButton>
                       </SidebarMenuItem>
                    ))}
                    
                </SidebarMenu>
            </SidebarContent>
        </SidebarGroup>
      

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>

    
  )
}

export default AppSidebar;