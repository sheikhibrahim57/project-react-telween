import React from 'react'
import Background from '../Recall'
import Recall from '../Recall'

const Service = () => {
  return (
    <div className='pt-[7px] flex flex-wrap'>
        <div className='w-2/4 flex justify-end mt-[134px] mb-[142px]'>
            <div className='mr-[61px]'>
                <h3 className='font-sans font-bold text-6xl'>Our Services</h3>
                <p className='font-sans tcolor  font-medium text-base w-[405px] mt-[5px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>
        <div className='w-2/4'>
            {/* <div className='bg-service01 bg-cover bg-center bg-no-repeat pb-[139px] pt-[147px] relative after:content-[""] after:w-full after:h-full after:absolute after:bg-black after:top-0 after:left-0 after:opacity-50
                 after:z-[-1] z-[1] w-[100%] h-[100%] '>
            <div className='ml-[116px]'>
                <h4 className='font-sans font-bold text-white text-[36px]'>We exist since 1975 on the oil and gas industry.</h4>
                <a className='font-sans font-semibold text-white mt-[19px] text-[16px] inline-block py-[13px] px-[30px] bg-navbg' href="#">LEARN MORE</a>
            </div>
            </div> */}
            <Recall></Recall>
        </div>
        <div className='w-2/4'>
            <Recall></Recall>
        </div>
        <div className='w-2/4'>
            <Recall></Recall>
        </div>
    </div>
  )
}

export default Service