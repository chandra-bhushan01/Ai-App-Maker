import React from 'react'
import { Button } from '../ui/button';
import { HelpCircle, LogOutIcon, Settings, Wallet } from 'lucide-react';

const SideBarFooter = () => {
    const options = [
      {
        name: "Settings",
        Icon: Settings
      },
      {
        name: "Help Center",
        Icon: HelpCircle
      },
      {
        name: "My Subscription",
        Icon: Wallet
      },
      {
        name: "Logout",
        Icon: LogOutIcon
      },
    ];

  return (
    <div className=' mb-5'>
        {options.map((options,idx)=>(
            <Button 
            key={idx}
            variant="ghost" className='w-full my-2 flex justify-start'>
                <options.Icon />
                {options.name}
            </Button>
        ))}
    </div>
  )
}

export default SideBarFooter