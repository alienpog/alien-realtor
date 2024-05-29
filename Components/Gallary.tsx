import Image from "next/image"

function Gallary() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 " id="gallary">
    <h3 className='text-2xl font-extrabold text-black px-4'>Gallary</h3>
    <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-12 px-4">
     <div className="group relative w-full md:max-w-[350px] lg:max-w-[450px] rounded-3xl overflow-hidden shadow-lg md:shadow-none md:hover:shadow-lg transform all ease-in-out duration-300 cursor-pointer">
        <p className="absolute bottom-0 w-full px-4 py-2 md:py-3 bg-[#F6E2C5] text-[#9D551E] md:hidden text-sm font-semibold group-hover:inline transform all ease-in-out duration-500 z-10">
           The MD/CEO of Samovic Homes and Properties LTD. and myself
        </p>
        <Image 
         src="/assets/IMG/hero and gallary/gallary-01.png"
         width={400}
         height={700}
         className="w-full object-contain md:group-hover:scale-110 md:group-hover:opacity-70 transform all ease-in-out duration-300"
         alt="The MD/CEO of Samovic Homes and Properties LTD and myself"
        />
     </div>
     <div className="group relative w-full md:max-w-[350px] lg:max-w-[450px] rounded-3xl overflow-hidden shadow-lg md:shadow-none md:hover:shadow-lg transform all ease-in-out duration-300 cursor-pointer">
        <p className="absolute bottom-0 w-full px-4 py-2 md:py-3 bg-[#F6E2C5] text-[#9D551E] md:hidden text-sm font-semibold group-hover:inline transform all ease-in-out duration-500 z-10">
        Team of Samovic Homes and Properties LTD.
        </p>
        <Image 
         src="/assets/IMG/hero and gallary/gallary-02.png"
         width={400}
         height={700}
         className="w-full object-contain md:group-hover:scale-110 md:group-hover:opacity-70 transform all ease-in-out duration-300"
         alt="Team of Samovic Homes and Properties LTD "
        />
     </div>
     <div className="group relative w-full md:max-w-[350px] lg:max-w-[450px] rounded-3xl overflow-hidden shadow-lg md:shadow-none md:hover:shadow-lg transform all ease-in-out duration-300 cursor-pointer">
        <p className="absolute bottom-0 w-full px-4 py-2 md:py-3 bg-[#F6E2C5] text-[#9D551E] md:hidden text-sm font-semibold group-hover:inline transform all ease-in-out duration-500 z-10">
        The MD/CEO Samovic Homes and Properties LTD. and  Our Customers at Canaanland Gardens 
        </p>
        <Image 
         src="/assets/IMG/hero and gallary/gallary-03.png"
         width={400}
         height={700}
         className="w-full object-contain md:group-hover:scale-110 md:group-hover:opacity-70 transform all ease-in-out duration-300"
         alt="The MD/CEO Samovic Homes and Properties LTD and  Our Customers at Canaanland Gardens "
        />
     </div>
     <div className="group relative w-full md:max-w-[350px] lg:max-w-[450px] rounded-3xl overflow-hidden shadow-lg md:shadow-none md:hover:shadow-lg transform all ease-in-out duration-300 cursor-pointer">
        <p className="absolute bottom-0 w-full px-4 py-2 md:py-3 bg-[#F6E2C5] text-[#9D551E] md:hidden text-sm font-semibold group-hover:inline transform all ease-in-out duration-500 z-10">
        The MD/CEO Samovic Homes and Properties LTD. and  Our Customers on the land bought at Canaanland Gardens  
        </p>
        <Image 
         src="/assets/IMG/hero and gallary/gallary-04.png"
         width={400}
         height={700}
         className="w-full object-contain md:group-hover:scale-110 md:group-hover:opacity-70 transform all ease-in-out duration-300"
         alt="The MD/CEO Samovic Homes and Properties LTD and  Our Customers on the land bought at Canaanland Gardens  "
        />
     </div>
    </div>
    </div>
  )
}

export default Gallary