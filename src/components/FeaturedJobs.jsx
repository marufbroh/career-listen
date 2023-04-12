import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ job }) => {
    const { id, job_title, company_logo, company_name, remote_or_onsite, location, fulltime_or_parttime, salary} = job;
    return (
        <div className='p-8 rounded-lg space-y-4 w-full border flex flex-col'>
            <div className='w-24 h-24'>
                <img src={company_logo} alt="" />
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold text-2xl'>{job_title}</h4>
                <p className='text-gray-500 font-semibold text-lg'>{company_name}</p>
                <div className='inline-flex gap-2'>
                    <button type='button' className='btn-outlined'>
                        {remote_or_onsite}
                    </button>
                    <button type='button' className='btn-outlined'>
                        {fulltime_or_parttime}
                    </button>
                </div>
                <div className='flex gap-3 items-center text-gray-500 font-semibold text-md'>
                    <div className='inline-flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                        <span>{location}</span>
                    </div>
                    <div className='inline-flex gap-1 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                        <span>Salary: {salary}</span>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button type='button' className='font-semibold shadow-sm px-3 py-1 text-lg rounded-md text-white bg-gradient-to-r from-indigo-400 to-purple-400'>
                    View Details
                </button>
            </Link>

        </div>
    );
};

export default FeaturedJobs;