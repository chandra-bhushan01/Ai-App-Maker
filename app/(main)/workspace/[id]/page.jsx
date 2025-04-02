import ChatView from "@/components/custom/ChatView";
import CodeView from "@/components/custom/CodeView";
import { FileVideo } from "lucide-react";
import React from "react";

const workspace = () => {
  return (
    <div className="px-3 h-full">
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1 sm:col-span-1">
          <ChatView />
        </div>

        <div className="md:col-span-3 sm:col-span-1">
          <CodeView />
        </div>
      </div>
    </div>
  );
};

export default workspace;
