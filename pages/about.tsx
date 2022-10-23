import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'

import Default from '../layouts/Default'

const Home: NextPage = () => {
  return (
    <Default>
      <Head>
        <title>Vanderbilt Acorns</title>
        <meta name="description" content="Your Vanderbilt identity, reimagined." />
      </Head>
      <About />
    </Default>
  )
}

export default Home
