import ChatView from "@/components/custom/ChatView";
import CodeView from "@/components/custom/CodeView";
import React from "react";

const Workspace = () => {
  return (
    <div className="h-screen w-full mt-20 gap-5 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="w-full  md:w-1/4 h-1/2 md:h-full p-3 overflow-y-auto">
        <ChatView />
      </div>
      <div className="w-full md:w-3/4 h-full p-3 mb-24 md:mb-0 overflow-y-auto md:overflow-hidden">
        <CodeView />
      </div>
    </div>
  );
};



export default Workspace;
