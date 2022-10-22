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
        >
            <VStack
                alignItems='flex-start'
            >
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Welcome to Vanderbilt Acorns
                </Text>
                <Text>
                    Acorns are your entrance to a the next generation of identity and community at Vanderbilt. Currently, owning an Acorn grants you access to the Vanderbilt Syndicate investment club, token-gated Google Workspace and GitHub, private Discord server, and Telegram messaging group.
                </Text>
                <a
                    href='https://app.syndicate.io/collectives/0x1c0D5AAECaD71433eaEEd1c60912A6503d6B549B?chain=mainnet'
                    target='_blank'
                >
                    <Button
                        bg="brand.500"
                        _hover={{
                            bg: 'brand.800'
                        }}
                    >
                        View Collective
                    </Button>
                </a>
            </VStack>
            <Image 
                src="/Acorn_Card.png"
                height='200px'
            />
        </Flex>
    </Card>
  )
}

export default Header