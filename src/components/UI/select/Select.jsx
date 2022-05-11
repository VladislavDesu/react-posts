import React from 'react';
import cl from "./Select.module.scss";

const Select = ({options, defaultValues, value, onChange}) => {
    return (
        <select className={cl.select} value={value} onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultValues}</option>
            {
                options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )
            }
        </select>
    );
};

export default Select;