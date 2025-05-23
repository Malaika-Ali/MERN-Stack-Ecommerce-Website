import React from 'react'

const SearchInput = ({setSearchQuery}) => {

 
  const onChange=(e)=>{
setSearchQuery(e.target.value)
  }

  return (
    <div className="relative w-full max-w-[80%] md:max-w-[50%] mx-auto overflow-hidden my-10">
    <input
      type="text"
      // value={searchQuery}
      placeholder="Search..."
      onChange={onChange}
      className="w-full py-3 px-5 pr-12 rounded-full text-gray-800 focus:outline-gray-300 bg-gray-100"
    />
    <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-black rounded-full p-2 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
  )
}

export default SearchInput
