"use client"

import Image from "next/image"
import { useRouter,useSearchParams } from "next/navigation"
import Phone from "./Phone";
import { useState } from "react";

function NavBar() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const page = searchParams?.get('page');

  const [active, setActive] = useState(false);
  
  const setdata =()=>{
    setActive(false)
  }
  return (
    <>
    <div className=" fixed w-full px-4 flex py-2 sm:py-6 sm:pr-8 justify-between items-center bg-[#FAFFF1] shadow-lg rounded-b-xl z-20">
        <div className="flex justify-center items-center">
        <Image
        src="/assets/IMG/hero and gallary/alien-logo.png"
        width={500}
        height={500}
        className="w-20 object-contain "
        alt="my logo"
        />
        <div className="w-[2px] h-12 bg-[#9D5524] rounded-full mx-3"/>
        <p className="hidden  sm:inline text-[11px] font-semibold text-[#9D5524] max-w-[130px]">Manager at  Samovic Homes and Properties LTD.</p>
        <Image
        src="/assets/IMG/hero and gallary/samovic-logo.png"
        width={500}
        height={500}
        className="w-12 object-contain rounded-2x "
        alt="samovic logo"
        />
        </div>

        <div className="hidden text-[#9D5524] space-x-8 font-medium text-sm lg:flex">
            <p className="navbarhover" onClick={()=>router.push('#about-us')} >About Us</p>
            <p className="navbarhover" onClick={()=>router.push('#gallary')}>Gallery</p>
            <p className="navbarhover" onClick={()=>router.push('#properties')}>Explore our Properties</p>
            <p className="navbarhover" onClick={()=>router.push('#contact')}>Contact</p>
        </div>

        <Image src="/assets/IMG/hero and gallary/menu-button.png"
        width={500}
        height={500}
        className="w-6 object-contain lg:hidden animate-pulse cursor-pointer"
        alt="menu for phone"
        onClick={()=>setActive(true)}
        />
        <Phone activemodel = {active} setActivemodel ={setdata}/>
    </div>
  </>
  )
}

export default NavBar