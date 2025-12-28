import React, { useState } from 'react';

const OutlinedDropDown = ({
    label,
    options = [],
    className = "",
    ...props
}, ref) => {

    const [category, setCategory] = useState('clothes')

    return (
        <div>
            <label htmlFor='dropdown' className="block text-sm mb-1.5 px-2">{label}</label>
            <select
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-full text-sm text-gray-700 ${className ? className : ""} transition-all duration-400 ease-linear dark:bg-transparent`}
                {...props}
                ref={ref}
                id="dropdown"
                onChange={(e)=>setCategory(e.target.value)}
                value={category}
            >
                <option value="" disabled selected>{label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}

            </select>
        </div>
    );
};

export default React.forwardRef(OutlinedDropDown);


// import { useState } from "react"
// import { ChevronDown } from "lucide-react"

// const OutlinedDropDown = ({ value, onChange, options }) => {
//     const [isOpen, setIsOpen] = useState(false)

//     const handleSelect = (optionValue) => {
//         onChange(optionValue)
//         setIsOpen(false)
//     }

//     return (
//         <div className="relative">
//             <button
//                 type="button"
//                 className="flex items-center justify-between w-full px-2 sm:px-4 py-1 sm:py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#9B9B9B] transition-colors duration-200 min-w-[140px]"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <span className="text-gray-700">{value}</span>
//                 <ChevronDown
//                     className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
//                 />
//             </button>

//             {isOpen && (
//                 <>
//                     <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
//                     <div className="absolute right-0 z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
//                         {options.map((option) => (
//                             <button
//                                 key={option.value}
//                                 type="button"
//                                 className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${value === option.label ? "bg-[#DCDCDC] text-black-color" : "text-gray-700"
//                                     }`}
//                                 onClick={() => handleSelect(option.value)}
//                             >
//                                 {option.label}
//                             </button>
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     )
// }

// export default OutlinedDropDown