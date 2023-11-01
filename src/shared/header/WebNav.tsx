import React from 'react';
import { Link } from 'react-router-dom';

const WebNav: React.FC = () => {
    return (
        <div>
            <ul className='flex items-center justify-center gap-4'>
                <li className='font-semibold'><Link to='/'>Home</Link></li>
                <li className='font-semibold'><Link to='/shop'>Shop</Link></li>
                <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                <li className='font-semibold'><Link to='/about'>About</Link></li>
                <li className='font-semibold'><Link to='/my-account'>My Account</Link></li>
                <li className='font-semibold'><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    );
};

export default WebNav;