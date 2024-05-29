import Image from 'next/image'
import {team} from '../dataimage'

function Teams() {

  const lastItem = team.length - 1
  return (
    <div className="max-w-7xl lg:mx-auto space-y-5">
        <h3 className='text-2xl font-extrabold text-black pl-4'>Our Team Leaders</h3>
        <p className='font-semibold max-w-[300px] text-[13px] text-center px-6 py-2 sm:text-sm text-black bg-[#F6E2C5] rounded-full ml-4'>Samovic Homes and Properties LTD.</p>
        <div className="relative">
        <div className="absolute right-0 h-full w-24 bg-gradient-to-l from-[#FAFFF1] z-10 lg:hidden"/>
        <div className=" flex gap-x-6 lg:gap-x-10 overflow-x-auto lg:overflow-x-auto p-6 scrollbar-thumb-rounded-md scrollbar-thumb-[#9D551E] scrollbar-thin ">
        { team.map(person =>
        <div className="w-full" key={person.id}>
        <Image key={person.id} src= {person.image} alt={person.name} width={668} height={899} className='max-w-52 object-contain rounded-xl shadow-lg'/>
         <p className='text-xs text-black font-semibold max-w-52 text-center mt-3'>{person.name}</p>
         <p className='text-xs text-[#9D551E] font-semibold max-w-52 text-center '>{person.title}</p>
         </div>
         )}
        </div>
        </div>
    </div>
  )
}

export default Teams