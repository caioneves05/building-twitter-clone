"use client"

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { BsTwitter } from 'react-icons/bs'



export const Sidebarlogo = () => {

    const router = useRouter();

    return ( 
        <div 
        onClick={() =>  router.push("/")}
        className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blu-300 hover:bg-opacity-10 cursor-pointer transition" >
            <BsTwitter size={28} color="white"/>
        </div>
     );
}
 