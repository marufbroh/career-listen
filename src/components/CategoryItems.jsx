import React from 'react';

const CategoryItems = ({ category }) => {
    const { Category_logo, Category_name, Jobs_available } = category;
    return (
        <div className='bg-color p-8 rounded-lg space-y-4 w-full'>
            <div className='bg-indigo-100 p-2 rounded-lg inline-flex'>
                <img src={Category_logo} alt="" />
            </div>
            <div className='space-y-2'>
                <h4 className='font-bold text-xl'>{Category_name}</h4>
                <p className='text-gray-400'>{Jobs_available}</p>
            </div>

        </div>
    );
};

export default CategoryItems;