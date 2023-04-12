import React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area
} from 'recharts';
import vector from '../assets/Vector.png'
import vector1 from '../assets/Vector-1.png'

const Statistics = () => {
    const data = [
        { name: "assignment-1", mark: 60 },
        { name: "assignment-2", mark: 50 },
        { name: "assignment-3", mark: 60 },
        { name: "assignment-4", mark: 55 },
        { name: "assignment-5", mark: 52 },
        { name: "assignment-6", mark: 48 },
        { name: "assignment-7", mark: 45 },
        { name: "assignment-8", mark: 60 },
    ];
    return (
        <div>
            <div className='bg-color py-12 lg:pt-16 lg:pb-24 relative'>
                <img className='hidden lg:flex absolute -top-24 right-0' src={vector1} alt="" />
                <h3 className='font-bold text-3xl text-center'>Statistics</h3>
                <img className='hidden lg:flex absolute bottom-0 left-0' src={vector} alt="" />
            </div>
            <div className='px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-20'>
                <ResponsiveContainer width="100%" height={500}>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;