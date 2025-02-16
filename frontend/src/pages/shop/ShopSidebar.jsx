import { useState } from 'react';

const ShopSidebar = ({ filters, filteredState, setFilteredState, clearFilters }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePriceChange = (range) => {
    setFilteredState(prev => ({
      ...prev,
      priceRange: `${range.min}-${range.max}`
    }));
  };

  return (
    <div className="w-full md:w-64 bg-white border border-gray-200 shadow-sm p-8 rounded-xl">
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
            {filters.category.map((cat) => (
              <div key={cat} className="flex items-center">
                <input
                  type="radio"
                  id={cat}
                  checked={filteredState.category === cat}
                  onChange={() => setFilteredState(prev => ({
                    ...prev,
                    category: cat
                  }))}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <label htmlFor={cat} className="ml-2 text-sm text-gray-600 capitalize">
                  {cat}
                </label>
              </div>
            ))}
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
        
        {expandedSections.price && (
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
        )}
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className="w-full bg-black-color text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors mt-5"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ShopSidebar;