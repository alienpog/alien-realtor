import Image from "next/image"
import { testimonials } from "../dataimage"

function Testimonials() {

  return (
    <div className="max-w-7xl lg:mx-auto space-y-5 ">
        <h3 className='text-2xl font-extrabold text-black pl-4'>Testimonials</h3>
        <div className="relative">
        <div className="absolute right-0 h-full w-24 bg-gradient-to-l from-[#FAFFF1] z-10 lg:hidden"/>
        <div className="flex space-x-6 lg:space-x-12 overflow-x-auto p-6 scrollbar-thumb-rounded-full scrollbar-thumb-[#F6E2C5] scrollbar-thin ">  
           {
            testimonials.map(testimonial =>
            <div className=" w-full min-w-80 max-w-96 bg-[#F6E2C5] p-6 rounded-2xl shadow-lg space-y-4" key={testimonial.id}>
                <Image src="/assets/IMG/Icons/quote-left-solid-24.png" width={30} height={30} alt="quote"/>
             <p className="font-normal text-[13px] sm:text-sm text-[#464646]">{testimonial.content}</p>
             <div>
             <p className="font-semibold text-[13px] sm:text-sm text-black">{testimonial.name}</p>
             <p className="font-semibold text-[13px] sm:text-sm text-black">{testimonial.name2}</p>
             </div>
            </div> )
           }
        </div>
        </div>
    </div>
  )
}

export default Testimonials