'use client'

import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { faqs } from '../dataimage'

function FAQ() {
    const [show, setShow] = useState(1)
  return (
    <div className='w-full max-w-7xl mx-auto space-y-5 px-4'>
        <h3 className='text-2xl font-extrabold text-black'>FAQ’s</h3>
        <div className=' max-w-2xl mx-auto'>
            {faqs.map(faq =>
             <div className='space-y-2 mb-3' key={faq.id}>

             <div className='flex justify-between items-center bg-[#F6E2C5] rounded-b-2xl shadow-lg px-4 py-3 '>
             <p className='font-semibold text-sm'>{faq.question}</p>
             <ChevronDoubleDownIcon className={`${show == faq.id ? "rotate-180" :"rotate-0"} min-w-6 h-6 text-[#9D551E] font-black ml-4 transition-all ease-in-out duration-500 animate-pulse`} onClick={()=>{setShow(faq.id)}}/>
             </div>
             <p className={`${show == faq.id ? "opacity-100" :"opacity-0 h-0" } font-normal text-sm transition-all ease-in-out duration-500`}>{faq.answer}</p>
         </div>   
            )}
            
        </div>
    </div>
  )
}

export default FAQ