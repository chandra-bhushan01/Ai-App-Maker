import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { UserDetailContext } from "@/context/UserDetailContext";

const Header = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  
  return (
    <div className="p-4 flex justify-between items-center">
      <Image src={"/ThunderLogo.png"} alt="logo" width={40} height={40} />
      {!userDetail && 
        <div className="flex gap-5">
          <Button variant="ghost">Sign In</Button>
          <Button
            className="text-white"
            style={{
              backgroundColor: "#4F46E5",
            }}
          >
            Get Started
          </Button>
        </div>
      }
    </div>
  );
};

export default Header;
