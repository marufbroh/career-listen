import React from 'react';
import vector from '../assets/Vector.png';
import vector1 from '../assets/Vector-1.png';

const Blog = () => {
    return (
        <div>
            <div className='bg-color py-12 lg:pt-16 lg:pb-24 relative'>
                <img className='hidden lg:flex absolute -top-24 right-0' src={vector1} alt="" />
                <h3 className='font-bold text-3xl text-center'>Blog</h3>
                <img className='hidden lg:flex absolute bottom-0 left-0' src={vector} alt="" />
            </div>
            <div>hello</div>
        </div>
    );
};

export default Blog;