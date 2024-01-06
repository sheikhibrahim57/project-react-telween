import React from 'react'

export const Banner = () => {
  return (
    <div className='relative after:content-[""] after:w-full after:h-full after:absolute after:bg-black after:top-0 after:left-0 after:opacity-50
     after:z-[-1] z-[1] bg-banner bg-cover bg-center w-[100%] h-[100%] bg-no-repeat py-[10px] md:py-[257px]'>
        <div className='max-w-container mx-auto'>
            <div className='mx-2'>
                <h1 className='font-sans font-bold text-white text-[30px] md:text-[64px] md:w-[842px] mb-[10px] md:mb-[31px]'>We exist since 1975 on the oil and gas industry.</h1>
                <a className='font-sans font-semibold text-white text-[16px] inline-block py-[13px] px-[40px] bg-navbg' href="#">LEARN MORE</a>
            </div>
        </div>
    </div>
  )
}

export default Banner
