import { Text } from '@chakra-ui/react';
import React from 'react'

import useTokenGate from '../../hooks/useTokenGate';

interface Props {
    userAddress: `0x${string}`
}

const TokenGate : React.FC<Props> = ({ userAddress }) => {


    const { isTokenOwned } = useTokenGate(userAddress);

    console.log(!isTokenOwned);

    if(!isTokenOwned) {
        return (
            <Text>Not Owned</Text>
        )
    }

    return (
        <div>Authorized</div>
    )
}

export default TokenGate