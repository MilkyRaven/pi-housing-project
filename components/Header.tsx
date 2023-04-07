import React, { useState } from 'react'
import Image from 'next/image'
import { BsSearch, BsTypeH1 } from 'react-icons/bs'
import { MdMenu } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import Link from 'next/link'
import { useRouter } from 'next/router'
type Props = {}

const Header = (props: Props) => {
    const [searchInput, setSearchInput] = useState('');
    const [pickDate, setPickDate] = useState(new Date());
    const router = useRouter();

    const handleSelect = (date) => {
        console.log(date)
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
            }
        });
    }
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
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-3 bg-tranparent outline-none' type="text" placeholder='Search' />
                <BsSearch className='h-3 text-black-200 cursor-pointer mx-3'></BsSearch>
            </div>
            <div className='flex items-center justify-end'>
                <div className='flex items-center space-x-2'>
                    <MdMenu className='h6 cursor-pointer'></MdMenu>
                    <HiUserCircle className='h6 cursor-pointer'></HiUserCircle>
                </div>
            </div>
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <Calendar
                        date={new Date()}
                        minDate={new Date()}
                        onChange={handleSelect}
                    ></Calendar>
                    <Link
                        href={'/search'}>
                        <button onClick={search} className='flex-grow'>Search</button>
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header