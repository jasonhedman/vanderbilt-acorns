export interface Route {
    href: string
    text: string
}

const routes : Route[] = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/about',
        text: 'About'
    },
]

export default routes