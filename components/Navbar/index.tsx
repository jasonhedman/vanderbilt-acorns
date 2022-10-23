import React from 'react'

import { Flex, Box, HStack, Image } from '@chakra-ui/react'

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
        bg='navbar.500'
        px={4}
        rounded='md'
    >
        <Image 
            src="/acorn.png"
            height='40px'
            alt='acorn card'
        />
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
        <Box
            display={{base: 'none', md: 'block'}}
        >
            <ConnectWallet />
        </Box>
    </Flex>
  )
}

export default Navbar