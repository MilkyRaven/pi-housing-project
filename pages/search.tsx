import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
type Props = {}

const search = (props: Props) => {
    return (
        <div>
            <Header></Header>
            <main className='flex'>
                <section>
                    <p>10 rooms found for you</p>
                    <h1 className='text-3xl'>Stays in x</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Filter 1</p>
                        <p className='button'>Filter 2</p>
                        <p className='button'>Filter 3</p>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default search