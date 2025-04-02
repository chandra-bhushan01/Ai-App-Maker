// "use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { UserDetailContext } from "@/context/UserDetailContext";
import Link from "next/link";
import { CodeContext } from "@/context/CodeContext";
import { DownloadCloud, Rocket } from "lucide-react";
import { usePathname } from "next/navigation";
import { ActionContext } from "@/context/ActionContext";
import SignInDialog from "./SignInDialog";


const Header = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const {codeGenerated, setCodeGenerated} = useContext(CodeContext);
  const {action, setAction} = useContext(ActionContext);
  const [openDialog, setOpenDialog] = useState(false);


  const pathName = usePathname();
   const [isWorkspace, setIsWorkspace] = useState(false);

   useEffect(() => {
     setIsWorkspace(pathName.includes("/workspace"));
   }, [pathName]);

  
  
   const onActionBtn = (action)=>{
    setAction({
      actionType:action,
      timeStamp: Date.now()
    })

   }

   const logout = () => {
     if (typeof window !== "undefined") {
       localStorage.removeItem("user"); // Remove user from storage
       setUserDetail([]);
       window.location.href = "/"; 
     }
   };


  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <div className="flex gap-2 items-center font-serif text-2xl">
          <Image
            src={"/ThunderLogo.png"}
            alt="logo"
            width={40}
            height={40}
          ></Image>
          <h1>Ai App Maker</h1>
        </div>
      </Link>

      {!userDetail ? (
        <div className="flex gap-5">
          <Button variant="ghost" onClick={() => setOpenDialog(true)}>
            Sign In
          </Button>
          <Button
            className="text-white"
            style={{
              backgroundColor: "#4F46E5",
            }}
          >
            Get Started
          </Button>
        </div>
      ) : (
        !isWorkspace&&
        <div className=" flex gap-5">
          <Button
            onClick={() => logout()}
            className="text-white"
            style={{
              backgroundColor: "#4F46E5",
            }}
          >
            Logout
          </Button>
        </div>
      )}

      {codeGenerated && isWorkspace && (
        <div className="flex items-center gap-2">
          <Button
            className="text-white"
            style={{
              backgroundColor: "#4F46E5",
            }}
            onClick={() => onActionBtn("export")}
          >
            <DownloadCloud></DownloadCloud>
            Export
          </Button>
          <Button
            className="text-white"
            style={{
              backgroundColor: "#4F46E5",
            }}
            onClick={() => onActionBtn("deploy")}
          >
            <Rocket />
            deploy
          </Button>
        </div>
      )}
      <SignInDialog
        openDialog={openDialog}
        closeDialog={(v) => {
          setOpenDialog(v);
        }}
      ></SignInDialog>
    </div>
  );
};

export default Header;
