import { ChartBarIcon, UsersIcon } from "@heroicons/react/24/solid"
import { HomeModernIcon } from "@heroicons/react/24/solid"

function AboutUs() {
  return (
    <div id='about-us'>
    <div className='w-full sm:w-1/2 sm:ml-[16%] mt-8 sm:mt-24 space-y-4 px-4'>
    <h3 className='text-2xl font-extrabold text-black'>About Us</h3>
      <p className='font-semibold max-w-[300px] text-[13px] text-center px-6 py-2 sm:text-sm text-black bg-[#F6E2C5] rounded-full'>Samovic Homes and Properties LTD.</p>
      <p className="font-normal text-[13px] sm:text-sm text-[#464646]">We&apos;re on a mission of transcending the expectation of our Customers through Provision of affordable land and Luxurious houses to the optimal Satisfaction of all stakeholders through.</p>
      <p className="font-normal text-[13px] sm:text-sm text-[#464646]">We make real estate investments simple, secure, and profitable for everyone. This is accomplished by striving for excellence, constantly innovating, conducting business with integrity,  and always putting our customers first.</p>
    </div>
    <div className='flex px-6 my-6 lg:my-10 mx-auto w-full max-w-6xl flex-wrap items-center justify-between gap-4 sm:text-sm text-black font-medium'>
    <div className=" flex justify-center items-center space-x-4">
        <div className=" flex w-16 h-16 justify-center items-center bg-[#F6E2C5]  rounded-full">
        <HomeModernIcon className="w-8 h-8 animate-bounce"/> 
        </div>
        <span className="font-medium text-sm text-black">Smart Home Design</span>
    </div>
    <div className=" flex justify-center items-center space-x-4">
        <div className=" flex w-16 h-16 justify-center items-center bg-[#F6E2C5]  rounded-full">
        <ChartBarIcon className="w-8 h-8 animate-bounce"/> 
        </div>
        <span className="font-medium text-sm text-black">Guaranteed Real Estate Investment</span>
    </div>
    <div className=" flex justify-center items-center space-x-4">
        <div className=" flex w-16 h-16 justify-center items-center bg-[#F6E2C5]  rounded-full">
        <UsersIcon className="w-8 h-8 animate-bounce"/> 
        </div>
        <span className="font-medium text-sm text-black">Exceptional Customer Service</span>
    </div>
    </div>
    <p className="w-full sm:w-1/2 px-3 sm:ml-[16%] font-normal text-[13px] sm:text-sm text-[#464646]"> We are honored to play a vital role in fueling your dreams of owning a house through innovation and trustworthy services, which encapsulates our real estate philosophy, as we continue to lead the line in providing affordable housing all across the country and beyond.</p>
</div>
  )
}

export default AboutUs