import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DateDropBox } from "../components/dropBox/dateDropBox"
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
        pv: 9000,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    }
];

interface Props{
    recycleData : any;
}

export const RecycleBarchart = (props: Props) => {
    const {recycleData} = props;
    return (
        <div className='col-span-2 h-[300px]' >
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={recycleData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="recycle" stackId="a" fill="#258f8f" label={{ position: "center", fill: "white" }} />

                    <Bar dataKey="nonRecycle" stackId="a" fill="#2f3232" label={{ position: "center", fill: "white" }} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );

}


