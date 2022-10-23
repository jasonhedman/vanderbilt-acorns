import { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { getUserInGuild } from "../services/guild";

const useIntegration = (guildAccessRequired = false) => {

    const { address } = useAccount();

    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    useEffect(() => {
        const getGuildAccess = async (address : `0x${string}`) => {
            const isInGuild = await getUserInGuild(address);
            setIsButtonDisabled(!isInGuild);
        }

        if(!address) {
            setIsButtonDisabled(true)
        } else {
            if(guildAccessRequired) {
                getGuildAccess(address);
            }
        }
    }, [guildAccessRequired, address])

    return {
        isButtonDisabled,
    }
}

export default useIntegration;