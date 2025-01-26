import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='p-4 flex justify-between items-center'>
        <Image src={'/ThunderLogo.png'} alt="logo" width={40} height={40} />
        <div className='flex gap-5'>
            <Button variant= "ghost">Sign In</Button>
            <Button className= "text-white" style = {
               {
                backgroundColor: '#4F46E5',
                
               }

            }>Get Started</Button>

        </div>
    </div>
  )
}

export default Header