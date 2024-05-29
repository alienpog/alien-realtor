import Image from "next/image"
import { flyers } from "../dataimage"

function Flyers() {
  return (
    <div className=" w-full max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-12 px-4">
        {flyers.map(flyer => <Image src= {flyer.image} width={4320} height={4516} className="w-full max-w-[450px] object-contain rounded-xl shadow-xl " alt={`${flyer.id}`} key={flyer.id} />)}   
    </div>
  )
}

export default Flyers