"use client"

import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

function Foolter() {

  return (
    <div className="bg-[#C3C18A] rounded-t-xl pt-9 lg:pt-12 px-4">
    <div className="flex flex-wrap gap-10 lg:gap-32 justify-center items-center max-w-[1500px] mx-auto">
      {/* <div className="w-full max-w-[450px] space-y-4">
           <h3 className='text-2xl font-extrabold text-black'>Newsletter</h3>
           <p className="text-[#9D5524] text-sm font-semibold">Subscribe to our weekly Newsletter and receive updates via email.</p>
           <form action="" className="flex space-x-2 items-center max-w-[420px]" onSubmit={handleSubscribe}>
            <div className="py-3 pl-2 h-full w-full bg-[#FAFFF1] flex items-center justify-start rounded-l-lg">
            <input type="text" className="flex-1 text-[#d48b5a] text-xs pl-4 placeholder-[#b66935] placeholder:opacity-70  focus:ring-0 outline-none rounded-r-xl
            border-none bg-transparent" placeholder="email"  value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
           </div>
            <button className="py-3 px-4 rounded-r-lg bg-[#F6E2C5] " disabled={!email} ><PaperAirplaneIcon className="w-4 object-contain text-[#9D5524] -rotate-12"/></button>
           </form>
      </div> */}
      <div className="w-full max-w-[450px] flex justify-center">
        <Image
        src="/assets/IMG/hero and gallary/alien-logo.png"
        width={500}
        height={500}
        className="w-32 object-contain "
        alt="my logo"
        />
        <div className="w-[2px] h-16 bg-[#9D5524] rounded-full mx-3"/>
        <div className="flex flex-col space-y-2">
        <Image
        src="/assets/IMG/hero and gallary/samovic-logo.png"
        width={500}
        height={500}
        className="w-16 object-contain rounded-xl"
        alt="samovic logo"
        />
        <p className="text-[11px] font-semibold text-[#9D5524]">Manager at  Samovic Homes and Properties LTD.</p>
        </div>
      </div>
      <div className="w-full max-w-[450px] flex flex-col items-center justify-center">
        <h2 className="text-sm text-[#9D551E] font-bold max-w-52 text-center">Our Vision:</h2>
        <p className="text-[11px] font-medium text-[#9D5524] text-center"> is to become the foremost and dominant real estate firm by measurement impact</p>
      </div>
      <div className="w-full max-w-[450px] flex flex-col items-center justify-center">
        <h2 className="text-sm text-[#9D551E] font-bold max-w-52 text-center">Our Mission:</h2>
        <p className="text-[11px] font-medium text-[#9D5524] text-center"> is to transcend the expectation of our customers through provision of affordable land luxurious houses to the optimal satisfactions of all stakeholders.</p>
      </div>
      
    </div>
    <p className="w-full text-xs text-[#e9e8cb] text-center animate-pulse mt-6 md:mt-10 pb-2 ">design and develop by alienartech</p>
    </div>
  )
}

export default Foolter