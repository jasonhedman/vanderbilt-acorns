import { erc721ABI, useContractRead } from 'wagmi'
import { BigNumber } from 'ethers';
import { contractAddress } from '../data/collective';

const useTokenGate = (userAddress: `0x${string}`, backdoor = false) => {

    const { data: balanceOf, isFetched, isLoading } = useContractRead({
        address: contractAddress,
        abi: erc721ABI,
        functionName: 'balanceOf',
        args: [userAddress],
    })

    return {
        isTokenOwned: backdoor || (isFetched && balanceOf instanceof BigNumber && !balanceOf.isZero()),
        isLoading,
    }
    
}


export default useTokenGate
