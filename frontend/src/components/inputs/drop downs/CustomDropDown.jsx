import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useSelector } from "react-redux";


const CustomDropdown = ({ value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (optionValue) => {
        onChange(optionValue)
        setIsOpen(false)
    }

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);


    return (
        <div className="relative">
            <button
                type="button"
                className="flex items-center justify-between w-full px-2 sm:px-4 py-1 sm:py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#9B9B9B] transition-colors duration-200 min-w-[140px]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-gray-700">{value}</span>
                <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${value === option.label ? "bg-[#DCDCDC] text-black-color" : "text-gray-700"
                                    }`}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default CustomDropdown