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

const Statistics = () => {
    const data = [
        { name: "assignment-1", mark: 30 },
        { name: "assignment-2", mark: 69 },
        { name: "assignment-3", mark: 55 },
        { name: "assignment-4", mark: 38 },
        { name: "assignment-5", mark: 70 },
        { name: "assignment-6", mark: 90 },
        { name: "assignment-7", mark: 65 },
        { name: "assignment-8", mark: 50 },
    ];
    return (
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
    );
};

export default Statistics;