import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory';
import FeaturedJobsSection from './FeaturedJobsSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <JobCategory />
            <FeaturedJobsSection />
        </div>
    );
};

export default Home;