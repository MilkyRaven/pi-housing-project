import Header from '@/components/Header'
import Head from 'next/head'
import Banner from '@/components/Banner'
import HouseCard from '@/components/HouseCard'
import Footer from '@/components/Footer'


export default function Home({ exploreData }) {

  return (
    <>
      <Head>
        <title>PI Housing Project</title>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header */}
        <Header></Header>
        {/* Banner */}
        <Banner></Banner>
        {/* Section */}
        {/* Pull some data from a server - API endpoints */}
        <div className='grid grid-cols-2'>
          {exploreData?.map(({ _id, title, description }) => (
            <HouseCard
              key={_id}
              title={title}
              description={description}
            />
          ))}
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('http://localhost:4000/housing').then((res) => res.json())
  return {
    props: {
      exploreData: exploreData
    }
  }
}
