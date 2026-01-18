'use client'
import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
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
import { SideBaroptions } from "../../../../services/constants";
import { usePathname } from "next/navigation";

 function AppSidebar() {
const path = usePathname();
console.log("path",path)
  
  return (
    
    <Sidebar className="border-r border-gray-200 bg-white" style={{ width: '280px' }}>
      {/* Modern Header with Logo and AI Recruiter Text */}
      <SidebarHeader className="px-6 py-8 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-xl  flex items-center justify-center shadow-xl">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={42} 
              height={42}  
              className='w-8 h-8 object-contain'
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Recruiter
            </h1>
            <p className="text-xs text-gray-500 font-medium">Smart Hiring Platform</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <div className="mb-3 px-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Main Menu</p>
          </div>
          <SidebarContent>
            <SidebarMenu className="space-y-2">
              {SideBaroptions.map((options, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    asChild 
                    className={`
                      group relative px-4 py-6 rounded-xl transition-all duration-300 ease-in-out
                      ${path === options.path 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200' 
                        : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md'
                      }
                    `}
                  > 
                    <Link href={options.path} className="flex items-center gap-4 w-full">
                      <div className={`
                        transition-transform duration-300 group-hover:scale-110
                        ${path === options.path ? 'scale-110' : ''}
                      `}>
                        <options.icon 
                          className={`
                            w-6 h-6 
                            ${path === options.path 
                              ? 'text-white' 
                              : 'text-gray-600'
                            }
                          `}
                        />
                      </div>
                      <span className={`
                        text-[15px] font-semibold tracking-tight
                        ${path === options.path 
                          ? 'text-white' 
                          : 'text-gray-700 group-hover:text-gray-900'
                        }
                      `}>
                        {options.name}
                      </span>

                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-gray-100">
        <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
          <p className="text-xs font-semibold text-gray-600 mb-1">Need Help?</p>
          <p className="text-[10px] text-gray-500">Contact support team</p>
        </div>
      </SidebarFooter>
    </Sidebar>

    
  )
}

export default AppSidebar;