import React, { useContext, useState } from 'react';
import { StoredCartContext } from '../App';
import vector from '../assets/Vector.png';
import vector1 from '../assets/Vector-1.png'
import AppliedJobsItems from './Jobs/AppliedJobsItems';

const AppliedJobs = () => {
    const [cart, setCart] = useContext(StoredCartContext);

    const [filteredCar, serfilteredCar] = useState(cart)

    return (
        <div>
            <div className='bg-color py-12 lg:pt-16 lg:pb-24 relative'>
                <img className='hidden lg:flex absolute -top-24 right-0' src={vector1} alt="" />
                <h3 className='font-bold text-3xl text-center'>Applied Jobs</h3>
                <img className='hidden lg:flex absolute bottom-0 left-0' src={vector} alt="" />
            </div>

            <div className='my-container flex flex-col gap-4'>
                <div className='flex justify-end'>
                    <div className="dropdown dropdown-left dropdown-end">
                        <div tabIndex={0} className='inline-flex gap-1 font-medium shadow-sm px-4 py-2 text-lg rounded-md text-gray-700 border-2 border-transparent bg-slate-100 m-1 items-center'>
                            <label className="">Filter By</label>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>

                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:bg-slate-200'><button onClick={() => {
                                serfilteredCar(cart.filter(job => job.remote_or_onsite === 'Remote'))
                            }}>Remote</button></li>
                            <li className='hover:bg-slate-200'><button onClick={() => {
                                serfilteredCar(cart.filter(job => job.remote_or_onsite === 'Onsite'))
                            }}>On-site</button></li>
                        </ul>
                    </div>
                </div>
                {
                    filteredCar.map(job => <AppliedJobsItems key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;