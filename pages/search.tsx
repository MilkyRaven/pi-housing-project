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
                    <p>10 rooms</p>
                    <div>
                        <p>One filter</p>
                        <p>Other filter</p>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default search