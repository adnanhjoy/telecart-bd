import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Shop from '../pages/shop/Shop'
import Blog from '../pages/blog/Blog'
import Contact from '../pages/contact/Contact'
import AccountLayout from '../layout/AccountLayout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/my-account',
                element: <AccountLayout />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
])