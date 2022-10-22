import React from 'react'

import { Text, Box } from '@chakra-ui/react'

import Integration from './Integration'

import integrations from '../../../data/integrations'

const Integrations = () => {
  return (
    <Box>
        <Text
            fontSize="xl"
            fontWeight="bold"
        >
            Integrations
        </Text>
        {
                integrations.map((integration) => (
                    <Integration 
                        key={integration.name}
                        integration={integration}
                    />
                ))
            }
    </Box>
  )
}

export default Integrations