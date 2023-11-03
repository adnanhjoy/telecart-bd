import React from 'react';

const FooterProductCard: React.FC = () => {
    return (
        <div className='flex items-center gap-2 border rounded-md transition duration-300 transform hover:scale-95 cursor-pointer w-4/5'>
            <img className='h-14' src="https://www.shopz.com.bd/wp-content/uploads/2021/12/LIGE-9866-Men-Quartz-Watch-1.jpg" alt="" />
            <div className='p-1'>
                <h4 className='text-xs line-clamp-1 font-semibold'>Indispensable -Quality And Durablity -OLEVS Leather Waterproof Quartz Fashion Watch for Men- Innovative Remarkable - Disclose Styles & Luxe</h4>
                <p className='text-[10px] line-clamp-2'>Fashion Watch for Men- Innovative Remarkable - Disclose Styles & Luxe. Indispensable -Quality And Durablity -OLEVS Leather Waterproof Quartz Fashion Watch for Men- Innovative Remarkable - Disclose Styles & Luxe</p>
            </div>
        </div>
    );
};

export default FooterProductCard;