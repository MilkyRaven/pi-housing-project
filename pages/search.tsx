import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfoCard from '@/components/InfoCard'


const search = ({ results }) => {
    const router = useRouter();

    console.log(results);
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
                    <div className='flex-col'>
                        {results.map(item => (
                            <InfoCard
                                key={item._id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                location={item.location}
                                photos={item.photos}
                            ></InfoCard>
                        )
                        )}
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default search

export async function getServerSideProps() {
    const searchResults = await fetch('http://localhost:4000/housing').then((res) => res.json())
    return {
        props: {
            results: searchResults,
        }
    }
}