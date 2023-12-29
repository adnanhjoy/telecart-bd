import React from 'react';
import { Link } from 'react-router-dom';

const WebNav: React.FC = () => {
    return (
        <div>
            <ul className='hidden md:flex items-center justify-center gap-6 text-white'>
                <li className='font-medium'><Link to='/'>Home</Link></li>
                <li className='font-medium'><Link to='/shop'>Shop</Link></li>
                <li className='font-medium'><Link to='/blog'>Blog</Link></li>
                <li className='font-medium'><Link to='/about'>About</Link></li>
                <li className='font-medium'><Link to='/contact'>Contact</Link></li>
                <li className='font-medium'><Link to='/my-account'>My Account</Link></li>
            </ul>
        </div>
    );
};

export default WebNav;