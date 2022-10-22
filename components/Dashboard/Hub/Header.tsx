import React from 'react'

import { Box, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box>
        <Text
            fontSize="2xl"
            fontWeight="bold"
        >
            Welcome to Vanderbilt Acorns
        </Text>
        <Text>
            Powering the next generation of Vanderbilt identity and community.
        </Text>
    </Box>
  )
}

export default Header