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
        <div className="flex space-x-6 overflow-x-auto p-6 scrollbar-thumb-rounded-md scrollbar-thumb-[#9D551E] scrollbar-thin">
        {randomLands?.map(gold => <div key={gold.id}><Image src= {gold.image}
<<<<<<< HEAD
         width={4320} height={4516} className={`max-w-[350px] object-contain rounded-lg hover:scale-110 hover:opacity-80 hover:shadow-lg transform all ease-in-out duration-500 cursor-pointer`} onClick={()=>{dispatch(image(gold.image))}} alt={`${gold.id}`} placeholder='blur' blurDataURL='URL'/></div>)}
=======
         width={4320} height={4516} className={`max-w-[400px] object-contain rounded-lg hover:scale-110 hover:opacity-80 hover:shadow-lg transform all ease-in-out duration-500 cursor-pointer`} onClick={()=>{dispatch(image(gold.image))}} alt={`${gold.id}`} placeholder='blur' blurDataURL='URL'/></div>)}
>>>>>>> 92c1a30246084fc2848a7fc7390502de36aff1a3
        </div>
        </div>
    </div>
  )
}

export default GoldenOpportunity
