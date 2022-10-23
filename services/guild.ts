import { guild } from "@guildxyz/sdk";

export const getUserInGuild = async (userAddress: `0x${string}`) => {
    const roles = await guild.getUserAccess(13790, userAddress);
    return roles.length > 0;
}