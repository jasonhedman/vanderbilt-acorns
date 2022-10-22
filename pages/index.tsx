import type { NextPage } from 'next'
import Dashboard from '../components/Dashboard'

import Default from '../layouts/Default'

const Home: NextPage = () => {
  return (
    <Default>
      <Dashboard />
    </Default>
  )
}

export default Home
