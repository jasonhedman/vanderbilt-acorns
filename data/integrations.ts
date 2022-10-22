export interface Integration {
    name: string,
    description: string,
    icon: string,
    link: string,
    callToAction: string,
}

const integrations: Integration[] = [
    {
        name: 'Uniswap',
        description: 'Swap tokens on Uniswap',
        icon: 'https://pbs.twimg.com/profile_images/1242184851152928769/wG2eTAfD_400x400.jpg',
        link: 'https://uniswap.org/',
        callToAction: 'Swap',
    }
]

export default integrations;