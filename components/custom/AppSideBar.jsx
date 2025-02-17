import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "../ui/button";
import { HelpCircle, Icon, LogOut, MessageCircleCode, Settings, Wallet } from "lucide-react";
import WorkspaceHistory from "./WorkspaceHistory";
import SideBarFooter from "./SideBarFooter";

const AppSideBar = () => {
    
  return (
    <Sidebar className='h-full'>
      <SidebarHeader className="p-5">
        <Image src={"/ThunderLogo.png"} alt="logo" width={30} height={30} />
        <Button className='mt-5'>
          <MessageCircleCode /> Start new chat
        </Button>
      </SidebarHeader>
      <SidebarContent className="p-5">
        <SidebarGroup />
        <WorkspaceHistory></WorkspaceHistory>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter> 
        <SideBarFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;
