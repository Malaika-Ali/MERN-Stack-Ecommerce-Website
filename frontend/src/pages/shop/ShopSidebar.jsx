// import { useState } from 'react'

// const ShopSidebar = ({ filters, filteredState, setFilteredState }) => {
//   const [priceRange, setPriceRange] = useState(50)

//   const handleCategoryChange = (category) => {
//     setFilteredState(prev => ({
//       ...prev,
//       category
//     }))
//   }

//   const handlePriceChange = (range) => {
//     setFilteredState(prev => ({
//       ...prev,
//       priceRange: `${range.min}-${range.max}`
//     }))
//   }

//   return (
//     <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm">
//       {/* Categories */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-3">Categories</h3>
//         <div className="space-y-2">
//           {filters.category.map((category) => (
//             <label key={category} className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="category"
//                 checked={filteredState.category === category}
//                 onChange={() => handleCategoryChange(category)}
//                 className="form-radio text-primary"
//               />
//               <span className="text-gray-700 capitalize">{category}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Price Range */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        // <div className="space-y-3">
        //   {filters.priceRange.map((range) => (
        //     <label key={range.label} className="flex items-center space-x-2">
        //       <input
        //         type="radio"
        //         name="priceRange"
        //         checked={filteredState.priceRange === `${range.min}-${range.max}`}
        //         onChange={() => handlePriceChange(range)}
        //         className="form-radio text-primary"
        //       />
        //       <span className="text-gray-700">{range.label}</span>
        //     </label>
        //   ))}
        // </div>
//       </div>

//       {/* Clear Filters Button */}
//       <button
//         onClick={() => setFilteredState({ category: "all", priceRange: "" })}
//         className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
//       >
//         Clear Filters
//       </button>
//     </div>
//   )
// }

// export default ShopSidebar











import { useState } from 'react'
// import { ChevronDown } from 'lucide-react'

const ShopSidebar = ({ filters, filteredState, setFilteredState, clearFilters }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="w-full md:w-64 bg-white border border-gray-2s00 shadow-sm p-8 rounded-xl">
      <div className="border-b pb-4">
        <h2 className="text-lg font-medium mb-4">Filter Products</h2>
      </div>

      {/* Category Section */}
      <div className="py-4 border-b">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-4"
        >
          <span className="font-medium">Category</span>
        </button>
        
        {expandedSections.category && (
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="clothes"
                checked={filteredState.category === 'clothes'}
                onChange={() => setFilteredState(prev => ({
                  ...prev,
                  category: 'clothes'
                }))}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label htmlFor="clothes" className="ml-2 text-sm text-gray-600">
                Clothes <span className="text-gray-400">(127)</span>
              </label>
            </div>
            <div className="flex items-center checked:bg-black-color">
              <input
                type="checkbox"
                id="bags"
                className="w-4 h-4 rounded border-gray-300"
              />
              <label htmlFor="bags" className="ml-2 text-sm text-gray-600">
                Bags <span className="text-gray-400">(58)</span>
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="shoes"
                className="w-4 h-4 rounded border-gray-300"
              />
              <label htmlFor="shoes" className="ml-2 text-sm text-gray-600">
                Shoes <span className="text-gray-400">(47)</span>
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="accessories"
                className="w-4 h-4 rounded border-gray-300"
              />
              <label htmlFor="accessories" className="ml-2 text-sm text-gray-600">
                Accessories <span className="text-gray-400">(47)</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className="py-4 border-b">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-4"
        >
          <span className="font-medium">Price</span>
        </button>
        
        <div className="space-y-3">
          {filters.priceRange.map((range) => (
            <label key={range.label} className="flex items-center space-x-2">
              <input
                type="radio"
                name="priceRange"
                checked={filteredState.priceRange === `${range.min}-${range.max}`}
                onChange={() => handlePriceChange(range)}
                className="form-radio text-primary"
              />
              <span className="text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
         
      </div>

        {/* Clear Filters Button */}
       <button
        // onClick={() => setFilteredState({ category: "all", priceRange: "" })}
        onClick={clearFilters}
        className="w-full bg-black-color text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors mt-5"       >
         Clear Filters
       </button>
    </div>
  )
}

export default ShopSidebar

