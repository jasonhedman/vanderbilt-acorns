import React from 'react'

import { Box, Button, Flex, Text } from '@chakra-ui/react'

import { useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Card from './Card'

const NotConnected = () => {

    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    return (
        <Card>
            <Flex
                flexDirection='column'
                alignItems='center'
                gap={2}
            >
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Not Connected
                </Text>
                <Text>
                    Please connect your wallet to continue.
                </Text>
                <Button
                    onClick={() => connect()}
                    variant='ghost'
                    colorScheme='whiteAlpha'
                >
                    Connect Wallet
                </Button>
            </Flex>
        </Card>
    )
}

export default NotConnected