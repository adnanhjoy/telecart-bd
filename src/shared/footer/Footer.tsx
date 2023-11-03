import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import FooterProduct from '../../components/footer/FooterProduct';
import FooterContact from '../../components/footer/FooterContact';

const Footer: React.FC = () => {
    return (
        <div className='bg-[#2c2c2c] text-gray-300 pt-10 pb-5'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='w-4/5'>
                        <div>
                            <p className='uppercase tracking-widest'>Comments</p>
                            <h2 className='text-primary font-semibold text-2xl my-2'>Telecart BD</h2>
                            <p className='text-sm text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio expedita laborum quisquam saepe, nam a aliquid, quo incidunt voluptates quam atque beatae dignissimos id sapiente consequuntur praesentium, eius error totam.</p>
                        </div>
                        <div className='mt-2'>
                            <p className='uppercase tracking-widest'>Follow US</p>
                            <span className='flex items-center gap-2 mt-2'>
                                <Link to=''><BiLogoFacebook className="bg-[#3C599F] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                                <Link to=''><BiLogoLinkedin className="bg-[#0085AE] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                                <Link to=''><BsTwitter className="bg-[#32CCFE] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                            </span>
                        </div>
                    </div>
                    <div>
                        <FooterProduct />
                    </div>
                    <div>
                        <FooterContact />
                    </div>
                </div>
                <hr className='my-5' />
                <div className='flex items-center justify-between'>
                    <p className='text-xs'>© 2023 CopyrightBD <a href="" className='text-primary'>Telecart BD</a> . All Rights Reserved.</p>
                    <p className='text-xs'>Developed By <a href="" className='text-primary'>Telecart BD</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;