import { Badge, Rate } from 'antd';
import React from 'react';

const HorizontalProductCard: React.FC = () => {
    return (
        <Badge.Ribbon text='off 10%' color='#f85606' className='text-xs' placement='start'>
            <div className='flex items-start cursor-pointer gap-2 bg-white rounded'>
                <img className='w-1/5' src="https://www.shopz.com.bd/wp-content/uploads/2021/12/LIGE-9866-Men-Quartz-Watch-1.jpg" alt="" />
                <div>
                    <h3 className='text-xs line-clamp-2 hover:underline text-dark'>Indispensable -Quality And Durablity -OLEVS Leather Waterproof Quartz Fashion Watch for Men- Innovative Remarkable - Disclose Styles & Luxe</h3>
                    <div className='flex items-center justify-between mt-2 mr-2'>
                        <span className='flex items-center gap-1'>
                            <Rate className='text-sm gap-0' allowHalf defaultValue={4.5} disabled />
                            <small className='text-dark'>(10)</small>
                        </span>
                        <span className='flex items-center gap-1 font-semibold text-primary'>
                            <p>2000</p>
                            <p className='font-[auto]'>৳</p>
                        </span>
                    </div>
                </div>
            </div>
        </Badge.Ribbon>
    );
};

export default HorizontalProductCard;