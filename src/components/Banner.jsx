import React from 'react';
import personImg from '../assets/person.png'

const Banner = () => {
    return (
        <div className='bg-color'>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:flex justify-between items-center gap-8'>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl flex flex-col font-bold'><span>One Step</span>  <span>Closer To Your</span>  <span className='title-text'>Dream Job</span></h1>
                    <p className='max-w-xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                        <button type='button' className='btn-primary'>
                            Get Started
                        </button>
                    </div>
                </div>
                <div>
                    <img src={personImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;