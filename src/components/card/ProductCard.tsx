import React from 'react';
import { Rate, Badge } from 'antd';

const ProductCard: React.FC = () => {
    return (
        <div className='border cursor-pointer hover:ring-1 hover:shadow bg-white rounded-md group relative overflow-hidden'>
            <Badge.Ribbon text='off 10%' color='#f85606' className='text-xs'>
                <div className='overflow-hidden'>
                    <img className='group-hover:scale-105 transition duration-300 transform' src="https://www.shopz.com.bd/wp-content/uploads/2021/12/LIGE-9866-Men-Quartz-Watch-1.jpg" alt="" />
                </div>
                <div className='p-2'>
                    <p className='text-sm leading-5 line-clamp-2 hover:underline text-dark'>Indispensable -Quality And Durablity -OLEVS Leather Waterproof Quartz Fashion Watch for Men- Innovative Remarkable - Disclose Styles & Luxe</p>
                    <div className='flex items-center justify-between mt-2'>
                        <span className='flex items-center gap-1'>
                            <Rate className='text-xs gap-0' allowHalf defaultValue={4.5} disabled />
                            <small className='text-dark'>(10)</small>
                        </span>
                        <span className='flex items-center gap-1 font-semibold text-primary'>
                            <p>2000</p>
                            <p className='font-[auto]'>৳</p>
                        </span>
                    </div>
                </div>
            </Badge.Ribbon>
        </div>
    );
};

export default ProductCard;