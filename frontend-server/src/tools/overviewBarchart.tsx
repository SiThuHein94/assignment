import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {exportMultipleChartsToPdf} from "../generatePdf"
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    }
];

export const OverViewBarchart = () => {

    return (
        <div className='px-16 text-center h-[300px]' ><>
            <ResponsiveContainer height="70%">
                <BarChart height={40} data={data}>
                    <Bar dataKey="uv" fill="#c10000" barSize={15} />
                </BarChart>

            </ResponsiveContainer>

            <div className='bg-blue-500 p-2 m-2 w-100 rounded-full text-white'>Overview</div>

            <div className='border border-blue-500 p-2 m-2 w-100 rounded-full cursor-pointer hover:border-blue-400' onClick={exportMultipleChartsToPdf}>ESG Readings</div>

        </>
        </div>
    );

}
