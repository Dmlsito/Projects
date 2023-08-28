import Login from '../components/Pages/Login'
import Home from '../components/Pages/Home'
import UserNotes from '../components/Pages/UserNotes'
import Profile from '../components/Pages/Profile'

export const routes = [
    {
        path: '/',
        component: Login    
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/userNotes',
        component: UserNotes
    },

    {
        path: '/profile',
        component: Profile
    }

]
