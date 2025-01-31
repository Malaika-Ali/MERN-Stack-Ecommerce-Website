import React from 'react';

const OutlinedDropDown = ({
    label,
    options = [],
    className = "",
    ...props
}) => {
    return (
        <div>
            <label className="block text-sm mb-1.5">{label}</label>
            <select
                className={`w-full px-4 py-2.5 border border-gray-200 rounded-full text-sm text-gray-700 ${className ? className : ""}`}
                {...props}
            >
                <option value={label} disabled selected>{label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default OutlinedDropDown;
