import React from 'react'
import Image from 'next/image'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='relative h-[300px]'>
        <Image
        alt='banner'
        src={'https://i.imgur.com/gfdufsl.jpg'}
        layout='fill'
        objectFit='cover'
        ></Image>
        <div className='absolute top-1/2 w-full text-center'>
            <button className='text-gray-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 active:scale-90 transition duration-100'>Find a room</button>
        </div>
    </div>
  )
}

export default Banner