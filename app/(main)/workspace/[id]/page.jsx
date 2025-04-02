import ChatView from "@/components/custom/ChatView";
import CodeView from "@/components/custom/CodeView";
import React from "react";

const Workspace = () => {
  return (
    <div className="p-3 mt-24 pb-11 overflow-auto w-full h-full  sm:mt-16">
      {/* Grid layout for responsiveness */}
      <div className="flex flex-col md:flex-row gap-5 h-[500px]">
        {/* Chat Section (1/4 width on large screens) */}
        <div className="w-ful md:w-1/4">
          <ChatView />
        </div>

        {/* Code Section (3/4 width on large screens) */}
        <div className="w-full md:w-3/4 ">
          <CodeView />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
