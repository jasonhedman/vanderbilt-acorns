import React from 'react'

import { Box, Button, Text } from '@chakra-ui/react'

import { useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const NotConnected = () => {

    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    return (
        <Box>
            <Text>
                You are not connected to the Ethereum network
            </Text>
            <Button
                onClick={() => connect()}
            >
                Connect Wallet
            </Button>
        </Box>
    )
}

export default NotConnected