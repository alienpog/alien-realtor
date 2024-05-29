"use client"

import Image from "next/image"
import { golds } from "../dataimage"
import {image} from "@/redux/slices/ImagePut";
import { useAppDispatch } from "../redux/hooks";

function GoldenOpportunity() {
    const dispatch = useAppDispatch();
    
    const randomLands = golds.sort(() => Math.random() - 0.5)  
  return (
    <div className="space-y-4 lg:space-y-10">
        <h3 className='text-2xl font-extrabold text-black pl-4 md:pl-6 lg:pl-8'>Golden Opportunity</h3>
        <div className="relative">
        <div className="absolute right-0 h-full w-24 bg-gradient-to-l from-[#FAFFF1] z-10"/>
        <div className="flex space-x-6 overflow-x-auto p-6 scrollbar-thumb-rounded-full scrollbar-thumb-[#F6E2C5] scrollbar-thin">
        {randomLands?.map(gold => <div key={gold.id}><Image src= {gold.image}
         width={4320} height={4516} className={`max-w-[350px] object-contain rounded-lg hover:scale-110 hover:opacity-80 hover:shadow-lg transform all ease-in-out duration-500 cursor-pointer`} onClick={()=>{dispatch(image(gold.image))}} alt={`${gold.id}`} placeholder='blur' blurDataURL='URL'/></div>)}
        </div>
        </div>
    </div>
  )
}

export default GoldenOpportunity