import React from 'react'

import { Box, Container } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

interface Props {
    children: React.ReactNode
}

const Default : React.FC<Props> = ({ children }) => {
  return (
    <Box
        minH='100vh'
        w='100%'
    >
        <Container
            maxW='3xl'
            py={8}
        >
            <Navbar />
            <Box
                py={8}
            >
                {children}
            </Box>
        </Container>
    </Box>
  )
}

export default Default