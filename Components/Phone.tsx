"use client"

import { XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface props{
    setActivemodel: () => void,
    activemodel: boolean,
   
} 

function Phone({activemodel, setActivemodel}:props) {
    const router = useRouter()
  return (
    <div className={`fixed top-0 h-screen w-full z-40 ${activemodel ? "right-0 opacity-100" : "right-[-100%] opacity-0"} transition-all duration-300 ease-in-out`}>
    <div className="h-full w-full flex bg-[#FFFFFA] bg-opacity-70 justify-end">    
    <div className="h-full w-3/5 bg-[#FAFFF1]">
        <div className="relative w-full flex justify-end py-12 px-6"><XMarkIcon className=" w-6 h-6 text-[#995323] cursor-pointer" onClick={setActivemodel}/></div>
        <div className="flex flex-col text-[#9D5524] items-end gap-y-4 pr-6 font-medium text-sm lg:hidden">
            <Link className="navbarhover" href='/#about-us' onClick={setActivemodel}>About Us</Link>
            <Link className="navbarhover" href='/#gallary' onClick={setActivemodel}>Gallery</Link>
            <Link className="navbarhover"  href='/#properties' onClick={setActivemodel}>Explore our Properties</Link>
            <Link className="navbarhover" href='/#contact' onClick={setActivemodel}>Contact</Link>
        </div>
        <div className='absolute z-10 overflow-hidden w-full flex justify-center'>
        <div className="">
        <svg width="869" height="514" viewBox="0 0 869 514" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_3589_819)">
<path d="M561.514 235.592C399.68 117.954 276.293 270.032 255.184 297.042C200.51 354.043 100.528 388.593 84.3885 411.305C76.5035 439.642 193.469 496.818 266.913 437.865C358.718 364.175 431.46 381.426 638.8 415.632C846.14 449.838 827.009 229.989 806.181 260.375C785.353 290.762 723.349 353.229 561.514 235.592Z" fill="#99FE00" fill-opacity="0.1"/>
</g>
<g filter="url(#filter1_f_3589_819)">
<path d="M480.485 136.362C293.834 64.3195 213.726 243.023 200.276 274.554C162.108 343.702 74.3799 402.812 64.6266 428.912C64.2975 458.323 192.036 483.482 247.841 407.619C317.596 312.79 392.328 310.746 601.489 290.457C810.65 270.169 735.601 62.6428 723.292 97.3646C710.983 132.086 667.137 208.404 480.485 136.362Z" fill="#F58632" fill-opacity="0.1"/>
</g>
<defs>
<filter id="filter0_f_3589_819" x="34.0095" y="141.52" width="834.391" height="372.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3589_819"/>
</filter>
<filter id="filter1_f_3589_819" x="14.626" y="43.457" width="781.8" height="464.299" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3589_819"/>
</filter>
</defs>
</svg>
        </div>

        </div>
    </div>
    </div>
    </div>
  )
}

export default Phone