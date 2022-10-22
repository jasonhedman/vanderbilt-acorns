import { erc721ABI, useContractRead } from 'wagmi'
import { BigNumber } from 'ethers';
import { contractAddress } from '../data/collective';

const useTokenGate = (userAddress: `0x${string}`) => {

    const { data: balanceOf, isFetched } = useContractRead({
        address: contractAddress,
        abi: erc721ABI,
        functionName: 'balanceOf',
        args: [userAddress],
    })

    return {
        isTokenOwned: isFetched && balanceOf instanceof BigNumber && !balanceOf.isZero(),
    }
    
}


export default useTokenGate
