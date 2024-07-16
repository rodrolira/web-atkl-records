import ArtistsPage from '../components/pages/Artist/ArtistsPage'
import Home from '../components/pages/Home'
import ReleasesPage from '../components/pages/ReleasesPage'

export const routes = [
    {
        to: '/',
        path: '/',
        Component: Home,
    },

    {
        to: '/artists',
        path: 'artists',
        Component: ArtistsPage,
    },
    {
        to: '/releases',
        path: 'releases',
        Component: ReleasesPage,
    },
    {
        to: '/login',
        path: '/login',
        Component: LoginPage,
    },
]
