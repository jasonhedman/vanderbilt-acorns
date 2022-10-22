import type { NextPage } from 'next'
import About from '../components/About'

import Default from '../layouts/Default'

const Home: NextPage = () => {
  return (
    <Default>
      <About />
    </Default>
  )
}

export default Home
