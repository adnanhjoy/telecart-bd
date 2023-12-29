import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Shop from '../pages/shop/Shop'
import Blog from '../pages/blog/Blog'
import Contact from '../pages/contact/Contact'
import AccountLayout from '../layout/AccountLayout'
import MyAccount from '../pages/account/MyAccount'
import ProfilePage from '../pages/account/Profile'
import OrdersPage from '../pages/account/Orders'
import CancelPage from '../pages/account/Cancel'
import ReturnPage from '../pages/account/Return'
import AddressPage from '../pages/account/AddressPage'
import PasswordPage from '../pages/account/PasswordPage'
import WishlistPage from '../pages/account/WishlistPage'
import TransactionPage from '../pages/account/TransactionPage'

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
                path: '/account',
                element: <AccountLayout />,
                children: [
                    {
                        path: '/account',
                        element: <MyAccount />
                    },
                    {
                        path: '/account/edit-profile',
                        element: <ProfilePage />
                    },
                    {
                        path: '/account/order',
                        element: <OrdersPage />
                    },
                    {
                        path: '/account/cancel',
                        element: <CancelPage />
                    },
                    {
                        path: '/account/return',
                        element: <ReturnPage />
                    },
                    {
                        path: '/account/address',
                        element: <AddressPage />
                    },
                    {
                        path: '/account/password',
                        element: <PasswordPage />
                    },
                    {
                        path: '/account/wishlist',
                        element: <WishlistPage />
                    },
                    {
                        path: '/account/transaction',
                        element: <TransactionPage />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
])