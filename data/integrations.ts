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
		description: 'Make collective crypto investments with other Vanderbilt Acorn holders.',
		icon: 'https://pbs.twimg.com/profile_images/1485994038150975505/t3NICoK9_400x400.jpg',
		link: 'https://app.syndicate.io/clubs/0x11602016329d49996076a44c642d666973113124?chain=mainnet',
		callToAction: 'Join Syndicate',
	},
	{
		name: 'Vanderbilt Governance',
		description: 'Propose administrative changes through a token-gated voting platform.',
		icon: 'https://pbs.twimg.com/profile_images/1305394576602013698/Tvz6UU5R_400x400.jpg',
		link: 'https://snapshot.org/#/js0n.eth',
		callToAction: 'Start Voting',
	},
    {
		name: 'Google Workspace',
		description: 'Access Vanderbilt-exclusive Google Suite workspace for Acorn holders.',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/1200px-Google_Drive_logo.png',
		link: 'https://drive.google.com/drive/folders/12fAhVkgD6vvZjb-Ls3BMh9Ptms5LfmhO',
		callToAction: 'Join Google Workspace',
	},
	{
		name: 'Guild',
		description: 'Access shared workspaces, documents, chats, events, and more.',
		icon: 'https://pbs.twimg.com/profile_images/1436774361399189507/L8tmHbzm_400x400.jpg',
		link: 'https://guild.xyz/vanderbilt-acorn',
		callToAction: 'Join Guild',
	},
	{
        name: 'GitHub',
        description: 'View Vanderbilt\'s exclusive Github repository, filled with resources for students.',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        link: 'https://github.com/vascosinghvu/Vanderbilt-Acorns',
        callToAction: 'Join GitHub Repo',
	},
    {
		name: 'Discord',
		description: 'Find and interact with new communities through our exclusive Discord.',
		icon: 'https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png',
		link: 'https://guild.xyz/vanderbilt-acorn',
		callToAction: 'Join Discord Server',
	},
    {
		name: 'Telegram',
		description: 'Make encrypted video conferences and send instant messages with other members.',
		icon: 'https://www.freepnglogos.com/uploads/telegram-logo-png-0.png',
		link: 'https://guild.xyz/vanderbilt-acorn',
		callToAction: 'Join Telegram Channel',
	}
]

export default integrations;