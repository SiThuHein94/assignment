import * as React from 'react';

export const DateDropBox = () => {

    const [value, setValue] = React.useState('today');

    const handleChange = (event) => {

        setValue(event.target.value);

    };

    return (
        <div>
            <select value={value} onChange={handleChange}>

                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>

            </select>
        </div>

    );

};
