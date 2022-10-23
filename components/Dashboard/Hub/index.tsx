import React from 'react'

import { Flex } from '@chakra-ui/react'

import Integrations from './Integrations'
import Header from './Header'
import IntegrationInfo from './IntegrationInfo'

const Hub = () => {
  return (
    <Flex
      flexDirection="column"
      gap={4}
    >
        <Header />
        <IntegrationInfo />
        <Integrations />
    </Flex>
  )
}

export default Hub