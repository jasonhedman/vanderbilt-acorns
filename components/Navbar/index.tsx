import React from 'react'

import { Flex, Text, HStack } from '@chakra-ui/react'

import ConnectWallet from './ConnectWallet'
import NavLink from './NavLink'

import routes from './routes'

const Navbar = () => {
  return (
    <Flex
        alignItems="center"
        w='100%'
        gap={4}
        h='60px'
    >
        <Text
            fontSize='xl'
            fontWeight='bold'
        >
            Vanderbilt Acorns
        </Text>
        <HStack
            mr='auto'
        >
            {
                routes.map((route, index) => (
                    <NavLink
                        key={index}
                        href={route.href}
                        text={route.text}
                    />
                ))
            }
        </HStack>
        <ConnectWallet />
    </Flex>
  )
}

export default Navbar