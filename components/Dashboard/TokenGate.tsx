import { CircularProgress, VStack } from '@chakra-ui/react';
import React, {useState} from 'react'

import useTokenGate from '../../hooks/useTokenGate';
import Hub from './Hub';
import RegisterFlow from './RegisterFlow';

interface Props {
    userAddress: `0x${string}`
}

const TokenGate : React.FC<Props> = ({ userAddress }) => {

    const [backdoor, setBackdoor] = useState(false)

    const useBackdoor = () => {
        setBackdoor(true)
    }
    
    const { isTokenOwned, isLoading } = useTokenGate(userAddress, backdoor);

    if(isLoading) {
        return (
            <VStack>
                <CircularProgress
                    isIndeterminate
                    color="brand.500"
                    trackColor='transparent'
                    size='70px'
                />
            </VStack>
        )
    }

    if(!isTokenOwned) {
        return (
            <RegisterFlow 
                useBackdoor={useBackdoor}
            />
        )
    }

    return (
        <Hub />
    )
}

export default TokenGate