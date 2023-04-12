import React from 'react';
import socialIcons from '../assets/Group9969.png'

const Footer = () => {
    return (
        <div className='bg-slate-950'>
            <div className='my-container text-white space-y-10'>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
                    <div className='space-y-6'>
                        <h3 className='font-bold text-3xl'>CareerListen</h3>
                        <p className='text-gray-500'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img src={socialIcons} alt="" />
                    </div>
                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Company</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>About Us</p>
                            <p>Work</p>
                            <p>Latest News</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Product</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>Prototype</p>
                            <p>Plans & Pricing</p>
                            <p>Customers</p>
                            <p>Integrations</p>
                        </div>
                    </div>
                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Support</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                        </div>
                    </div>
                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Contact</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>524 Broadway , NYC</p>
                            <p>+1 777 - 978 - 5570</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center text-gray-500'>
                    <p>@2023 CareerListen. All Rights Reserved</p>
                    <p>Powered by CareerListen</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;