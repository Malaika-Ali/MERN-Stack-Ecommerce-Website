import React, { useState, useEffect, useRef, useCallback } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi"
import Filter from './Filter';

const SearchInput = ({ value, setSearchQuery, suggestions, handleSearch, setSelectedFilter, selectedFilter }) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)

  const inputRef = useRef(null)
  const suggestionRefs = useRef([])

  const onChange = useCallback((e) => {
    const newValue = e.target.value
    setSearchQuery(newValue)

    if (newValue.trim()) {
      setShowSuggestions(true)
      handleSearch()
    } else {
      setShowSuggestions(false)
    }

    setSelectedSuggestionIndex(-1)
  }, [setSearchQuery])

  // Reset selected index when suggestions change
  useEffect(() => {
    setSelectedSuggestionIndex(-1)
  }, [suggestions])


  // Scroll selected suggestion into view
  useEffect(() => {
    if (selectedSuggestionIndex >= 0 && suggestionRefs.current[selectedSuggestionIndex]) {
      suggestionRefs.current[selectedSuggestionIndex].scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      })
    }
  }, [selectedSuggestionIndex])


  const selectSuggestion = (suggestion) => {
    setSearchQuery(suggestion.productName)
    setShowSuggestions(false)
    setSelectedSuggestionIndex(-1)
    handleSearch()
  }


  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) {
      // If no suggestions, handle Enter normally
      if (e.key === 'Enter') {
        setShowSuggestions(false)
        handleSearch()
        console.log("enter pressed")
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedSuggestionIndex(prev =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        )
        break

      case 'ArrowUp':
        e.preventDefault()
        setSelectedSuggestionIndex(prev =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        )
        break

      case 'Enter':
        e.preventDefault()
        if (selectedSuggestionIndex >= 0) {
          // Select the highlighted suggestion
          selectSuggestion(suggestions[selectedSuggestionIndex])
        } else {
          // No suggestion selected, perform normal search
          setShowSuggestions(false)
          handleSearch()
        }
        console.log("enter pressed")
        break

      case 'Escape':
        setShowSuggestions(false)
        setSelectedSuggestionIndex(-1)
        inputRef.current?.blur()
        break

      case 'Tab':
        setShowSuggestions(false)
        setSelectedSuggestionIndex(-1)
        break

      default:
        break
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
    setShowSuggestions(false)
    setSelectedSuggestionIndex(-1)
    inputRef.current?.focus()
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.closest('.relative').contains(event.target)) {
        setShowSuggestions(false)
        setSelectedSuggestionIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative w-[90%] lg:w-[60%] mx-auto my-20 flex items-center justify-between pl-5 rounded-full text-gray-800 focus:outline-gray-300 bg-gray-100">
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Search..."
        onChange={onChange}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     setShowSearchResults(true)
        //     setShowSuggestions(false)
        //     handleSearch()
        //     console.log("enter pressed")
        //   }
        // }}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (suggestions.length > 0) {
            setShowSuggestions(true)
          }
        }}
        className="w-full text-gray-800 bg-gray-100 outline-none py-2.5 "
        autoComplete="off"
        role="combobox"
        aria-expanded={showSuggestions}
        aria-haspopup="listbox"
        aria-activedescendant={selectedSuggestionIndex >= 0 ? `suggestion-${selectedSuggestionIndex}` : undefined}
      />
      <div className='flex flex-row justify-between items-center '>
        {
          value && (
            <button className=' hover:bg-gray-200 rounded-full transition-colors duration-300'
              // onClick={() => {
              //   setSearchQuery('')
              //   setShowSuggestions(false)
              // }}
              onClick={clearSearch}
            >
              <RxCross2 size={18} color='grey' />
            </button>
          )
        }

        <div>
          <Filter setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
        </div>

        {/* <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black rounded-full p-2 text-white" */}
        <button className=" self-stretch flex items-center justify-center px-3 py-2.5 bg-black-color rounded-r-full text-white"

          onClick={handleSearch}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg> */}
          <FiSearch size={22} className=" " />

        </button>

      </div>



      {(suggestions.length > 0 && showSuggestions && value) && (
        <ul className="absolute top-12 z-[9] bg-white border w-full mt-1 rounded-lg p-2 shadow text-black"
          role="listbox">
          {suggestions.map((item, index) => (
            <li
              key={item._id}
              // className="p-2 hover:bg-gray-100 cursor-pointer rounded-sm"
              className={`p-2 cursor-pointer rounded-sm transition-colors ${index === selectedSuggestionIndex
                ? 'bg-blue-100 text-blue-800'
                : 'hover:bg-gray-100'
                }`}
              // onClick={() => {
              //   setSearchQuery(item.productName)
              //   setShowSearchResults(true)
              //   setShowSuggestions(false)
              //   handleSearch()

              // }}
              onClick={() => selectSuggestion(item)}
              role="option"
              aria-selected={index === selectedSuggestionIndex}
            >
              {item.productName}
            </li>
          ))}
        </ul>
      )}


    </div>

  )
}

export default React.memo(SearchInput)
