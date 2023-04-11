import React from 'react'
import Image from 'next/image'

const InfoCard = ({ title, description, price, location, photos }) => {
    { console.log(photos) }
    return (
        <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
            <div>
                {photos.map(item => (
                    <Image className='rounded-xl' src={item} alt='room' width={300} height={300} ></Image>
                ))}
            </div>
            <div>
                <p>{location}</p>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default InfoCard