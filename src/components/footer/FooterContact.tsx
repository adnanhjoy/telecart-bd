import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/category/payments.png'

const FooterContact: React.FC = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='uppercase tracking-widest'>Quick Links</p>
                    <ul className='mt-2'>
                        <li className='text-xs mb-2 hover:underline'><Link to=''>About Us</Link></li>
                        <li className='text-xs mb-2 hover:underline'><Link to=''>Contact Us</Link></li>
                        <li className='text-xs mb-2 hover:underline'><Link to=''>Blog</Link></li>
                        <li className='text-xs mb-2 hover:underline'><Link to=''>Our Shop</Link></li>
                    </ul>
                </div>
                <div>
                    <p className='uppercase tracking-widest'>Customer Care</p>
                    <ul className='mt-2'>
                        <li className='text-xs mb-2 hover:underline'><Link to=''>Privacy Policy</Link></li>
                        <li className='text-xs mb-2 hover:underline'><Link to=''>Terms & Condition</Link></li>
                        <li className='text-xs mb-2 hover:underline'><Link to=''>Refund Policy</Link></li>
                        <li className='text-xs mb-2 hover:underline'><Link to=''>Help Center</Link></li>
                    </ul>
                </div>
            </div>
            <div className='mt-8'>
                <p className='uppercase tracking-widest'>we accpet</p>
                <img className='mt-4' src={img} alt="" />
            </div>
        </div>
    );
};

export default FooterContact;