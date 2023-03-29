import React from 'react'
import Image from 'next/image'
import {BsSearch} from 'react-icons/bs'
import {MdMenu} from 'react-icons/md'
import {HiUserCircle} from 'react-icons/hi'
type Props = {}

const Header = (props: Props) => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image alt='logo' src={'https://i.imgur.com/AAnIPvG.png'}
                    width={80}
                    height={80}
                    objectFit="contain"
                    objectPosition="left"
                ></Image>
            </div>
            <div className='flex items-center border-2 rounded-full py-1 px-1'>
                <input className='flex-grow pl-3 bg-tranparent outline-none' type="text" placeholder='Search' />
                <BsSearch className='h-3 text-black-200 cursor-pointer mx-3'></BsSearch>
            </div>
            <div className='flex items-center justify-end'>
                <div className='flex items-center space-x-2'>
                    <MdMenu className='h6 cursor-pointer'></MdMenu>
                    <HiUserCircle className='h6 cursor-pointer'></HiUserCircle>
                </div>
            </div>
        </header>
    )
}

export default Header