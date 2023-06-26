import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Movie } from '../typings'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import datarequests from '../utils/Datarequests'
import Banner from '../components/Banner'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  requestPopular: Movie[],
  requestTopRated: Movie[],
  requestTrending: Movie[],
  requestHorror: Movie[],
  requestUpcoming: Movie[]
}

export default function Home({ requestPopular,
  requestTopRated,
  requestTrending,
  requestHorror,
  requestUpcoming }: Props) {
  console.log(requestPopular)
  return (
    <div>
      <Head>
        <title>Home -Netflix</title>
      </Head>

      <Navbar />
      <Banner requestPopular={requestPopular} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <Row title="Popular" movies={requestPopular} />
        <Row title="Top Rated" movies={requestTopRated} />
        <Row title="Trending" movies={requestTrending} />
        <Row title="Horror" movies={requestHorror} />
        <Row title="Upcoming" movies={requestUpcoming} />

      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const [
    requestPopular,
    requestTopRated,
    requestTrending,
    requestHorror,
    requestUpcoming
  ]
    = await Promise.all([
      fetch(datarequests.requestPopular).then((res) => res.json()),
      fetch(datarequests.requestTopRated).then((res) => res.json()),
      fetch(datarequests.requestTrending).then((res) => res.json()),
      fetch(datarequests.requestHorror).then((res) => res.json()),
      fetch(datarequests.requestUpcoming).then((res) => res.json())
    ])

  return {
    props: {
      requestPopular: requestPopular.results,
      requestTopRated: requestTopRated.results,
      requestTrending: requestTrending.results,
      requestHorror: requestHorror.results,
      requestUpcoming: requestUpcoming.results
    }
  }
}

