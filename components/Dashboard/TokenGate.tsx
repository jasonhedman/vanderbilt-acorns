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

    console.log('backdoor', backdoor);
    
    const { isTokenOwned } = useTokenGate(userAddress, backdoor);

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