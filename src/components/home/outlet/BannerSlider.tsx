import { Carousel } from 'antd';
import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg';
import banner2 from '../../../assets/banner/banner2.jpg';
import banner3 from '../../../assets/banner/banner3.jpg';

const BannerSlider: React.FC = () => {
    return (
        <div>
            <Carousel autoplay>
                <img className='h-72' src={banner1} alt="" />
                <img className='h-72' src={banner2} alt="" />
                <img className='h-72' src={banner3} alt="" />
            </Carousel>
        </div>
    );
};

export default BannerSlider;