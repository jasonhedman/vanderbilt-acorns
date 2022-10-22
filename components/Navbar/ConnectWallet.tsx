import React, { useEffect, useState } from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'
  

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { getEllipsisTxt } from '../../services/utils'


const ConnectWallet = () => {

    const [isConnected, setIsConnected] = useState(false);
    const [address, setAddress] = useState('')

    const { address: wagmiAddress, isConnected: isWagmiConnected } = useAccount();

    useEffect(() => {
        setIsConnected(isWagmiConnected);
        wagmiAddress && setAddress(wagmiAddress);
    }, [isWagmiConnected, wagmiAddress])

    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    const { disconnect, reset } = useDisconnect();

    const onDisconnect = () => {
        disconnect();
        reset();
    }

    if(isConnected && address) {
        return (
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {getEllipsisTxt(address)}
                </MenuButton>
                <MenuList>
                    <MenuItem
                        onClick={() => onDisconnect()}
                    >
                        Disconnect
                    </MenuItem>
                </MenuList>
            </Menu>
        )
    }

    return (
        <Button
            onClick={() => connect()}
        >
            Connect Wallet
        </Button>
    )
}

export default ConnectWallet