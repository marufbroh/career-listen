import React, { useEffect, useState } from 'react';
import CategoryItems from './CategoryItems';

const JobCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categoriesData.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-container'>
            <div className='text-center space-y-4'>
                <h2 className='font-bold text-3xl'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 justify-around my-8'>
                {
                    categories.map(category => <CategoryItems key={category.id} category={category} />)
                }
            </div>
        </div>
    );
};

export default JobCategory;