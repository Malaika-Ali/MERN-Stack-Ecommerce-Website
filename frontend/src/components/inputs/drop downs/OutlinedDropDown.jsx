import React, {useId} from 'react';

const OutlinedDropDown = ({
    label,
    options = [],
    className = "",
    ...props
}, ref) => {

    const id=useId()

    return (
        <div>
            <label className="block text-sm mb-1.5 px-2">{label}</label>
            <select
                className={`w-full px-4 py-2.5 rounded-full text-sm text-gray-700 ${className ? className : ""} transition-all duration-400 ease-linear`}
                {...props}
                ref={ref}
                id={id}
            >
                <option value={label} disabled selected>{label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
                
            </select>
        </div>
    );
};

export default React.forwardRef(OutlinedDropDown);
