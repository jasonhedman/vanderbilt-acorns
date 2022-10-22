import React, { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'

import NotConnected from '../utilities/NotConnected';
import TokenGate from './TokenGate';

interface ConnectedAddress {
    address: `0x${string}`
    isConnected: boolean
}

const Dashboard = () => {

    const { address, isConnected} = useAccount();

    const [connectedAddress, setConnectedAddress] = useState<ConnectedAddress | null>(null);

    useEffect(() => {
        address ? setConnectedAddress({
            address,
            isConnected
        }) : setConnectedAddress(null)
    }, [address, isConnected])



    if(!connectedAddress || !(connectedAddress.isConnected && connectedAddress.address)) {
        return (
            <NotConnected />
        )
    }

    return (
        <TokenGate 
            userAddress={connectedAddress.address}
        />
    )
}

export default Dashboard