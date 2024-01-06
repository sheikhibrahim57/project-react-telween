import React from 'react'
import { useState } from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'


export const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClick = () =>{
        // console.log('ok cool');
        setShow(!show)
    }
  return (
    <div className='bg-navbg py-[27px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex items-center justify-between mx-2'>
                <div className='w-1/4'>
                    <img src="assets/logo.svg" alt="logo" />
                </div>

                <div className='flex justify-end'>
                    <div className='md:hidden' onClick={handleClick}>
                        {
                            show == true ? <RxCross1 className='text-3xl text-white'/> : <AiOutlineBars className='text-3xl text-white'/>
                        }
                    </div>

                    <div className='w-3/4'>
                        <ul className={`md:flex z-10 justify-end duration-300 font-sans font-semibold text-base
                        text-[#ffffff] gap-x-12 text-center absolute md:static w-full top-[-147px] ${show ? 'top-[195px] w-full left-0'  : 'top-[-147px] left-0'  }`}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a className='border-[1px] border-boderyello px-3 py-2' href="#">CONTACT</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
