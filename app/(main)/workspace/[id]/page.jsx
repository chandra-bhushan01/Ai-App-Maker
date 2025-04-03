import ChatView from "@/components/custom/ChatView";
import CodeView from "@/components/custom/CodeView";
import React from "react";

const Workspace = () => {
  return (
    <div className=" max-h-[95vh] w-full mt-24 rounded-lg border-solid flex flex-col md:flex-row gap-5 px-3 overflow-auto">
      <div className="w-full md:w-1/4 min-h-0">
        <ChatView />
      </div>
      <div className=" w-full md:w-3/4 min-h-0 ">
        <CodeView />
      </div>
    </div>
  );
};



export default Workspace;
