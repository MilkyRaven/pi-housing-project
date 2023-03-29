import Header from '@/components/Header'
import Head from 'next/head'
import Banner from '@/components/Banner'


export default function Home() {
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

      </main>
    </>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('')
}
