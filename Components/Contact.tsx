import { MapPinIcon } from "@heroicons/react/24/solid"
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

function Contact() {
  return (
    <div className="max-w-7xl lg:mx-auto space-y-5 px-4" id="contact">
        <h3 className='text-2xl font-extrabold text-black'>Contact</h3>
        <div className=" max-w-xl flex flex-wrap justify-start gap-6">
            <div className="w-[230px] flex justify-start items-center space-x-3 text-[#2E2E2E] text-base font-semibold">
                <PhoneArrowDownLeftIcon className="w-4 h-4 text-[#CE0000] animate-ping"/>
                <p className="tracking-widest">09068801955</p>
            </div>
            <div className="max-w-[220px] flex justify-start items-center space-x-3 text-[#2E2E2E] text-base font-semibold">
                <Image src= "/assets/IMG/Icons/Frame.png" width={96} height={96} alt="icon" className="w-4 h-4 text-[#CE0000]"/>
                <p>alienrealtor</p>
            </div>
            <div className="max-w-[230px] flex justify-start items-center space-x-3 text-[#2E2E2E] text-base font-semibold">
            <Image src= "/assets/IMG/Icons/Frame2.png" width={96} height={96} alt="icon" className="w-4 h-4 text-[#9D5524]"/>
                <p>alienrealtormail@gmail.com</p>
            </div>
            <div className="max-w-[230px] flex justify-start items-center space-x-3 text-[#2E2E2E] text-base font-semibold">
                <Image src= "/assets/IMG/Icons/Frame3.png" width={96} height={96} alt="icon" className="w-4 h-4 text-[#9D5524]"/>
                <p>alienrealtor</p>
            </div>
        </div>
        <div className="flex items-center justify-start space-x-3 text-[#9D5524] text-base font-semibold">
            <MapPinIcon className="min-w-4 h-4 text-[#9D5524]"/>
           <p>Providence House, 1, Babatunde Ladega Street, Omole Phase 1, Ojudu Berger, Lagos</p>
        </div>
    </div>
  )
}

export default Contact