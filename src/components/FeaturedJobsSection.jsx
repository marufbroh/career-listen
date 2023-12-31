import React, { useContext, useState } from 'react';
import { FeaturedJObsContext } from '../App';
import FeaturedJobs from './FeaturedJobs';

const FeaturedJobsSection = () => {
    const featuredJobs = useContext(FeaturedJObsContext)
    const [seeMore, setSeeMore] = useState(false)
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-4 mb-10'>
            <div className='text-center space-y-4'>
                <h3 className='font-bold text-3xl'>Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    featuredJobs.slice(0, seeMore ? 6 : 4).map(job => <FeaturedJobs key={job.id} job={job} />)
                }
            </div>
            <div className='flex justify-center pt-3'>
                <button onClick={() => setSeeMore(!seeMore)} type='button' className={`btn-primary ${seeMore ? 'hidden' : ''}`}>
                    See All Jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobsSection;