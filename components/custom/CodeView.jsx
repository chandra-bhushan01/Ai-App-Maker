"use client";
import React, { useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import Lookup from "@/data/Lookup";
import { LogOut } from "lucide-react";
const CodeView = () => {
  const [activeTab, setActiveTab] = useState("code");
  const [files,setFiles] = useState(Lookup?.DEFAULT_FILE);
  return (
    <div>
      <div className="bg-[#181818] w-full p-1 border">
        <div className=" flex items-center flex-wrap  rounded-full shrink-0 bg-black p-1 w-[140px] gap-3 justify-center">
          <h2
            onClick={() => setActiveTab("code")}
            className={` text-sm cursor-pointer ${activeTab == "code" && "text-blue-500 bg-blue-500 bg-opacity-25 p-1 px-2 rounded-full"}`}
          >
            Code
          </h2>
          <h2
            onClick={() => setActiveTab("preview")}
            className={` text-sm cursor-pointer ${activeTab == "preview" && "text-blue-500 bg-blue-500 bg-opacity-25 p-1 px-2 rounded-full"}`}
          >
            Preview
          </h2>
        </div>
      </div>
      <SandpackProvider 
      files={files}
      template="react" theme={"dark"} customSetup={{
        dependencies:
        {
          ...Lookup.DEPENDANCY
        }
      }}
      options={{
        externalResources:["https://unpkg.com/@tailwindcss/browser@4"]
      }}
      >
        <SandpackLayout>
          {activeTab === "code" ? (
            <>
              <SandpackFileExplorer style={{ height: "74vh" }} />
              <SandpackCodeEditor style={{ height: "74vh" }} />
            </>
          ) : (
            <SandpackPreview style={{ height: "73vh" }} showNavigator={true} />
          )}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default CodeView;
