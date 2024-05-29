
import Image from "next/image"

function HeroSection() {
  return (
    <div className='flex flex-col justify-between items-center pt-[80px] md:pt-[100px]'>
        <h1 className=' max-w-3xl my-4 sm:my-8 mx-8 text-4xl lg:text-5xl font-extrabold text-[#000000] leading-[48px] lg:leading-[68px]'>Hello and welcome! I&apos;m Abbey  a Manager at Samovic Homes and Properties LTD.</h1>
        <div className='relative max-w-[700px] w-full'>
        <Image
        src="/assets/IMG/hero and gallary/hero-img.png"
        width={400}
        height={700}
        className="w-full object-contain"
        alt="Picture of the abbey"
        />
        <div className='absolute -bottom-1 h-24 w-full  bg-gradient-to-t from-[#FAFFF1]  '/>
        </div>
        <div className='absolute -z-10 overflow-hidden w-full flex justify-center '>
        <div className="scale-125">
        <svg width="869" height="514" viewBox="0 0 869 514" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_3589_819)">
<path d="M561.514 235.592C399.68 117.954 276.293 270.032 255.184 297.042C200.51 354.043 100.528 388.593 84.3885 411.305C76.5035 439.642 193.469 496.818 266.913 437.865C358.718 364.175 431.46 381.426 638.8 415.632C846.14 449.838 827.009 229.989 806.181 260.375C785.353 290.762 723.349 353.229 561.514 235.592Z" fill="#99FE00" fill-opacity="0.1"/>
</g>
<g filter="url(#filter1_f_3589_819)">
<path d="M480.485 136.362C293.834 64.3195 213.726 243.023 200.276 274.554C162.108 343.702 74.3799 402.812 64.6266 428.912C64.2975 458.323 192.036 483.482 247.841 407.619C317.596 312.79 392.328 310.746 601.489 290.457C810.65 270.169 735.601 62.6428 723.292 97.3646C710.983 132.086 667.137 208.404 480.485 136.362Z" fill="#F58632" fill-opacity="0.1"/>
</g>
<defs>
<filter id="filter0_f_3589_819" x="34.0095" y="141.52" width="834.391" height="372.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3589_819"/>
</filter>
<filter id="filter1_f_3589_819" x="14.626" y="43.457" width="781.8" height="464.299" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3589_819"/>
</filter>
</defs>
        </svg>
        </div>
        </div>
    </div>
  )
}

export default HeroSection