import React from 'react'

import { Image, Text, VStack, Flex, Button } from '@chakra-ui/react'
import Card from '../../utilities/Card'

const Header = () => {
  return (
    <Card
        p={4}
    >
        <Flex
            gap={8}
            alignItems='center'
            justifyContent='space-between'
        >
            <VStack
                alignItems='flex-start'
            >
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    color='brand.500'
                >
                    Welcome to Vanderbilt Acorns
                </Text>
                <Text
                    fontSize="xl"
                >
                    Your Vanderbilt identity, reimagined.
                </Text>
                <a
                    href='https://app.syndicate.io/collectives/0x1c0D5AAECaD71433eaEEd1c60912A6503d6B549B?chain=mainnet'
                    target='_blank'
                    rel="noreferrer"
                >
                    <Button
                        bg="brand.500"
                        color="black"
                        _hover={{
                            bg: 'brand.800',
                            color: 'white'
                        }}
                    >
                        View Collective
                    </Button>
                </a>
            </VStack>
            <Image 
                src="/AcornSQUARE.png"
                height='200px'
                alt='acorn card'
            />
        </Flex>
    </Card>
  )
}

export default Header