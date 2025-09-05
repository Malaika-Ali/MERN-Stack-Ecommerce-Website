import React, { useState, useRef, useEffect } from "react"

const Filter = ({
    onFilterChange = () => { },
    filterOptions = [
        { value: "", label: "Select Filter" },
        { value: "Clothes", label: "Clothes" },
        { value: "Accessories", label: "Accessories" },
        { value: "Footwear", label: "Footwear" },
        { value: "Bags", label: "Bags" },
    ],
    setSelectedFilter,
    selectedFilter
}) => {
    // const [selectedFilter, setSelectedFilter] = useState(filterOptions[0])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [focusedIndex, setFocusedIndex] = useState(-1)

    const dropdownRef = useRef(null)
    const buttonRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
                setFocusedIndex(-1)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Handle keyboard navigation
    const handleKeyDown = (event) => {
        if (!isDropdownOpen) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                setIsDropdownOpen(true)
                setFocusedIndex(0)
            }
            return
        }

        switch (event.key) {
            case "Escape":
                setIsDropdownOpen(false)
                setFocusedIndex(-1)
                buttonRef.current?.focus()
                break
            case "ArrowDown":
                event.preventDefault()
                setFocusedIndex((prev) => (prev < filterOptions.length - 1 ? prev + 1 : 0))
                break
            case "ArrowUp":
                event.preventDefault()
                setFocusedIndex((prev) => (prev > 0 ? prev - 1 : filterOptions.length - 1))
                break
            case "Enter":
            case " ":
                event.preventDefault()
                if (focusedIndex >= 0) {
                    handleFilterSelect(filterOptions[focusedIndex])
                }
                break
            case "Tab":
                setIsDropdownOpen(false)
                setFocusedIndex(-1)
                break
        }
    }

    const handleFilterSelect = (option) => {
        setSelectedFilter(option)
        setIsDropdownOpen(false)
        setFocusedIndex(-1)
        onFilterChange(option)
        buttonRef.current?.focus()
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
        if (!isDropdownOpen) {
            setFocusedIndex(0)
        }
    }

    return (
        <div ref={dropdownRef}>
            <button
                ref={buttonRef}
                type="button"
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
                className="flex items-center justify-between gap-1 px-2 py-2.5 bg-white text-sm font-medium text-black-color   hover:bg-gray-50 outline-none transition-colors min-w-[100px] self-stretch h-full"
                aria-expanded={isDropdownOpen}
                aria-haspopup="listbox"
            // aria-label={`Filter by ${selectedFilter.label}`}
            >
                <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
                        />
                    </svg>
                    <span>Filters</span>
                </div>
                <svg
                    className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div role="listbox" aria-label="Filter options" className="py-1">
                        {filterOptions.map((option, index) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleFilterSelect(option)}
                                className={`w-full text-left px-4 py-2 text-sm transition-colors ${selectedFilter.value === option.value
                                    ? "bg-gray-100 text-black-color font-medium"
                                    : "text-gray-700 hover:bg-gray-50"
                                    } ${focusedIndex === index ? "bg-gray-100" : ""}`}
                                role="option"
                            // aria-selected={selectedFilter.value === option.value}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{option.label}</span>
                                    {/* {selectedFilter.value === option.value && (
                                        <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )} */}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Screen Reader Only Status */}
            <div className="sr-only" aria-live="polite" aria-atomic="true">
                {isDropdownOpen ? "Filter dropdown is open" : "Filter dropdown is closed"}
                {/* {selectedFilter && `, currently filtering by ${selectedFilter.label}`} */}
            </div>
        </div>
    )
}

export default React.memo(Filter)
