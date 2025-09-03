import React, { useState, useEffect, useRef } from 'react'
import { RxCross2 } from "react-icons/rx";

const SearchInput = ({ value, setSearchQuery, suggestions, setShowSearchResults, handleSearch }) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)

  const inputRef = useRef(null)
  const suggestionRefs = useRef([])

  const onChange = (e) => {
    setSearchQuery(e.target.value)
    setShowSuggestions(true)
    setSelectedSuggestionIndex(-1) // Reset selection when typing
    // setShowSearchResults(true)
    handleSearch()
  }

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
    setShowSearchResults(true)
    setShowSuggestions(false)
    setSelectedSuggestionIndex(-1)
    handleSearch()
  }


  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) {
      // If no suggestions, handle Enter normally
      if (e.key === 'Enter') {
        setShowSearchResults(true)
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
          setShowSearchResults(true)
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
    setShowSearchResults(false)
    inputRef.current?.focus()
  }




  return (
    <div className="relative  w-full max-w-[80%] md:max-w-[50%] mx-auto my-20">
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
        className="w-full py-3 px-5 pr-12 rounded-full text-gray-800 focus:outline-gray-300 bg-gray-100"
        autoComplete="off"
        role="combobox"
        aria-expanded={showSuggestions}
        aria-haspopup="listbox"
        aria-activedescendant={selectedSuggestionIndex >= 0 ? `suggestion-${selectedSuggestionIndex}` : undefined}
      />
      {
        value && (
          <button className='absolute right-12 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors duration-300'
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

      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black rounded-full p-2 text-white"
        onClick={handleSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>


      {(suggestions.length > 0 && showSuggestions && value) && (
        <ul className="absolute z-[9] bg-white border w-full mt-1 rounded-lg p-2 shadow text-black"
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
