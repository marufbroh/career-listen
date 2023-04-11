import React, { useContext } from 'react';
import { StoredCartContext } from '../App';
import vector from '../assets/Vector.png';
import vector1 from '../assets/Vector-1.png'
import AppliedJobsItems from './Jobs/AppliedJobsItems';

const AppliedJobs = () => {
    const [cart, setCart] = useContext(StoredCartContext);
    // console.log(cart);
    return (
        <div>
            <div className='bg-color py-12 lg:pt-16 lg:pb-24 relative'>
                <img className='hidden lg:flex absolute -top-24 -right-1' src={vector1} alt="" />
                <h3 className='font-bold text-3xl text-center'>Applied Jobs</h3>
                <img className='hidden lg:flex absolute bottom-0 left-0' src={vector} alt="" />
            </div>
            <div className='my-container'>
                {
                    cart.map(job => <AppliedJobsItems key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;