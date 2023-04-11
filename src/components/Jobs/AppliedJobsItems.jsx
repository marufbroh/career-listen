import React from 'react';

const AppliedJobsItems = ({ job }) => {
    const { id, job_title, company_logo, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibilities, educational_requirements, required_experience, contact_information } = job;
    return (
        <div className='border'>
            <div className='h-24 w-24 bg-slate-100 rounded-lg'>
                <img src={company_logo} alt="" />
            </div>
        </div>
    );
};

export default AppliedJobsItems;