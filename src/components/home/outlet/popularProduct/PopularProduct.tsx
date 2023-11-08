import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../productSection/ProductCard';

const PopularProduct: React.FC = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear"
    };
    return (
        <div className='my-4'>
            <h5 className='font-semibold text-primary mb-4'>Popular Products</h5>
            <Slider {...settings}>
                {
                    Array(20).fill(null).map((_, index) =>
                        <ProductCard
                            key={index}
                        />)
                }
            </Slider>
        </div>
    );
};

export default PopularProduct;