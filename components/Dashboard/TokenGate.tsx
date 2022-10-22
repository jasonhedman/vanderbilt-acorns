import { Text } from '@chakra-ui/react';
import React from 'react'

import useTokenGate from '../../hooks/useTokenGate';
import Hub from './Hub';
import RegisterFlow from './RegisterFlow';

interface Props {
    userAddress: `0x${string}`
}

const TokenGate : React.FC<Props> = ({ userAddress }) => {

    const { isTokenOwned } = useTokenGate(userAddress);

    if(!isTokenOwned) {
        return (
            <RegisterFlow />
        )
    }

    return (
        <Hub />
    )
}

export default TokenGate