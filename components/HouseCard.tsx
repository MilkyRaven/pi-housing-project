import React from 'react'
import Image from 'next/image'

type Props = {}

const HouseCard = ({ title, description }) => {
    return (
        <div className='flex items-center m-4 mt-5 space-x-4 rounded-xl cursor-pointer hover:opacity-50 hover:bg-slate-100 hover:scale-30 transition transform duration-300 ease-out'>
            <div className='relative h-20 w-20'>
                <Image
                    src={'https://i.imgur.com/xIr9zQh.jpg'}
                    alt='room placeholder'
                    layout='fill'
                    className='rounded-sm'
                ></Image>
            </div>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HouseCard