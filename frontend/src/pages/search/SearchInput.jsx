import { memo, useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const SearchInput = ({ value, setSearchQuery, suggestions, setShowSearchResults, handleSearch }) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const onChange = (e) => {
    setSearchQuery(e.target.value)
    setShowSuggestions(true)
  }

  return (
    <div className="relative  w-full max-w-[80%] md:max-w-[50%] mx-auto my-20">
      <input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setShowSearchResults(true)
            setShowSuggestions(false)
            handleSearch()
          }
        }}
        className="w-full py-3 px-5 pr-12 rounded-full text-gray-800 focus:outline-gray-300 bg-gray-100"
      />
      {
       value && (
          <button className='absolute right-12 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors duration-300'
            onClick={() => {
              setSearchQuery('')
              
            }}>
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


      {(suggestions.length > 0 && showSuggestions) && (
        <ul className="absolute z-[1000] bg-white border w-full mt-1 rounded-lg p-2 shadow text-black ">
          {suggestions.map((item) => (
            <li
              key={item._id}
              className="p-2 hover:bg-gray-100 cursor-pointer rounded-sm"
              onClick={() => {
                setSearchQuery(item.productName)
                setShowSearchResults(true)
                setShowSuggestions(false)
                handleSearch()

              }}
            >
              {item.productName}
            </li>
          ))}
        </ul>
      )}


    </div>

  )
}

export default memo(SearchInput)
