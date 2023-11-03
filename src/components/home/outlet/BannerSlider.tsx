import { Carousel } from 'antd';
import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg';
import banner2 from '../../../assets/banner/banner2.jpg';
import banner3 from '../../../assets/banner/banner3.jpg';

const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const BannerSlider: React.FC = () => {
    return (
        <div>
            <Carousel autoplay>
                <img style={contentStyle} src={banner1} alt="" />
                <img style={contentStyle} src={banner2} alt="" />
                <img style={contentStyle} src={banner3} alt="" />
            </Carousel>
        </div>
    );
};

export default BannerSlider;