import React from 'react'

import { Text, Flex, SimpleGrid } from '@chakra-ui/react'

import Integration from './Integration'

import integrations from '../../../data/integrations'

const Integrations = () => {
  return (
    <Flex
        flexDirection="column"
        gap={4}
    >
        <Text
            fontSize="xl"
            fontWeight="bold"
            color='brand.500'
        >
            Integrations
        </Text>
        <SimpleGrid
            columns={2}
            gap={4}
        >
            {
                integrations.map((integration) => (
                    <Integration 
                        key={integration.name}
                        integration={integration}
                    />
                ))
            }
        </SimpleGrid>
    </Flex>
  )
}

export default Integrations