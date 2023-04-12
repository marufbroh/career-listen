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
            <div className='my-container space-y-5'>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>When should you use context API?</h3>
                    <p className='font-semibold text-lg'>Context API in React when you need to share data or state between multiple components that are not directly related or nested within each other in the component tree.</p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is a custom hook?</h3>
                    <p className='font-semibold text-lg'>A custom hook is a reusable function in React that contains some stateful or stateless logic, which can be used by multiple components in a React application to abstract away complex logic or state management into a simple and reusable hook.</p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is useRef?</h3>
                    <p className='font-semibold text-lg'>useRef is a hook in React that returns a mutable ref object which can be used to hold a reference to a DOM node or any other value that needs to persist between renders of a component without causing a re-render.</p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is useMemo?</h3>
                    <p className='font-semibold text-lg'>useMemo is a hook in React that is used for performance optimization by memoizing the result of a computationally expensive function, and returning the memoized result on subsequent re-renders of a component. This avoids the need to recalculate the result of the function on every render, which can be especially useful when the function takes a lot of time to compute or when it is called frequently.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;