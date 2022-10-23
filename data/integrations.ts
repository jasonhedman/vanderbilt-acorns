export interface Integration {
    name: string,
    description: string,
    icon: string,
    link: string,
    callToAction: string,
}

const integrations: Integration[] = [
	{
		name: 'Vanderbilt Syndicate',
		description: 'Vanderbilt Syndicate is an investment club that allows students to create a collective portfolio.',
		icon: 'https://pbs.twimg.com/profile_images/1485994038150975505/t3NICoK9_400x400.jpg',
		link: 'https://app.syndicate.io/clubs/0x11602016329d49996076a44c642d666973113124?chain=mainnet',
		callToAction: 'Join Syndicate',
	},
	{
		name: 'Vanderbilt Governance',
		description: 'Vanderbilt Governance is a community-driven voting platform for Vanderbilt students.',
		icon: 'https://pbs.twimg.com/profile_images/1305394576602013698/Tvz6UU5R_400x400.jpg',
		link: 'https://snapshot.org/#/js0n.eth',
		callToAction: 'Start Voting',
	},
    {
		name: 'Google Workspace',
		description: 'Access Vanderbilt-exclusive Google Suite workspace for Acorn holders.',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/1200px-Google_Drive_logo.png',
		link: 'https://guild.xyz/vanderbilt-acorn',
		callToAction: 'Join Google Workspace',
	},
	{
        name: 'GitHub',
        description: 'View Vanderbilt\'s exclusive Github repository, filled with resources for students.',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        link: 'https://guild.xyz/vanderbilt-acorn',
        callToAction: 'Join GitHub Repo',
	},
    {
		name: 'Discord',
		description: 'Enter our Token-gated Discord to find and interact with new communities within the Vanderbilt network.',
		icon: 'https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png',
		link: 'https://guild.xyz/vanderbilt-acorn',
		callToAction: 'Join Discord Server',
	},
    {
		name: 'Telegram',
		description: 'Enter our Token-gated Telegram to use encrypted video conferencing and instant messaging.',
		icon: 'https://www.freepnglogos.com/uploads/telegram-logo-png-0.png',
		link: 'https://guild.xyz/vanderbilt-acorn',
		callToAction: 'Join Telegram Channel',
	}
]

export default integrations;