import React from 'react'

import { Flex } from '@chakra-ui/react'

import Integrations from './Integrations'
import Header from './Header'

const Hub = () => {
  return (
    <Flex
        flexDirection="column"
        gap={4}
    >
        <Header />
        <Integrations />
    </Flex>
  )
}

export default Hub