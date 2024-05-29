"use client"

import Image from "next/image"
import { useState } from "react"
import {lands, buildings} from "../dataimage"
import {image} from "@/redux/slices/ImagePut";
import { useAppDispatch } from "../redux/hooks";
import Link from "next/link";


function Properties() {

const dispatch = useAppDispatch();

const randomLands = lands.sort(() => Math.random() - 0.5)
  const [active, setActive] = useState("land")

  return (
    <div className="space-y-4 lg:space-y-10 "id="properties">
        <h3 className='text-2xl font-extrabold text-black pl-4 md:pl-6 lg:pl-8'>Our Properties</h3>
        <div className=" flex w-full space-x-24 md:space-x-48 justify-center">
            <p className={`properties-handle ${active == "land" ? "bg-[#F6E2C5] text-[#9D551E] shadow-lg" : "bg-[#F4F5F1] text-[#5D5D5D] animate-pulse" } hover:text-[#9D551E] hover:bg-[#F6E2C5] hover:shadow-lg cursor-pointer  transform all ease-in-out duration-300`} onClick={()=>setActive("land")}>Lands</p>
            <p className={`properties-handle ${active == "building" ? "bg-[#F6E2C5] text-[#9D551E] shadow-lg" : "bg-[#F4F5F1] text-[#5D5D5D] animate-pulse" } hover:text-[#9D551E] hover:bg-[#F6E2C5] hover:shadow-lg cursor-pointer  transform all ease-in-out duration-300`} onClick={()=>setActive("building")}>Buildings</p>
        </div>
        <div className="relative">
        <div className="absolute right-0 h-full w-24 bg-gradient-to-l from-[#FAFFF1] z-10"/>
        <div className="flex p-6 gap-x-6 overflow-x-auto scrollbar-thumb-rounded-md scrollbar-thumb-[#9D551E] scrollbar-thin">
             {randomLands?.map(land => <Image key={land.id} src= {land.image}
         width={4320} height={4516} className={`${active == "land" ? "opacity-100":"opacity-0 hidden"} max-w-[400px] object-contain rounded-lg hover:scale-110 hover:opacity-80 hover:shadow-lg transform all ease-in-out duration-500 cursor-pointer`} onClick={()=>{dispatch(image(land.image))}} alt={`${land.id}`} placeholder='blur' blurDataURL='URL'/>)}
         {buildings?.map(building => <Image key={building.id} src= {building.image}
         width={1080}
         height={1129} className={`${active == "building" ? "opacity-100":"opacity-0 hidden"} max-w-[400px] object-contain rounded-lg hover:scale-110 hover:opacity-80 hover:shadow-lg transform all ease-in-out duration-500 cursor-pointer`} onClick={()=>{dispatch(image(building.image))}} alt={`${building.id}`} placeholder='blur' blurDataURL='URL'/>)}
         <Link href="https://web.samovichomesandproperties.com/register?code=eoA60cxH" className="w-[400px] h-[417px] flex flex-col space-y-6 justify-center items-center rounded-lg bg-[#F6E2C5] hover:scale-110 hover:opacity-80 hover:shadow-lg transform all ease-in-out duration-300 cursor-pointer">
            <Image key="samovic logo" src="/assets/IMG/hero and gallary/samovic-logo.png"
            width={500}
            height={500}
            alt="samovic logo"
            placeholder='blur' blurDataURL='URL'
            className="w-24 object-contain rounded-xl"/>
             <p className="w-[400px] px-12 text-[#9D551E] text-center text-base font-medium">Visit Samovic Home and Properties LTD. website for more details on Homes and Properties</p>
         </Link>
        </div>
        </div>
        
       
    </div>
  )
}

export default Properties