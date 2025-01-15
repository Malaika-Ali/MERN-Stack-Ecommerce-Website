const FilterChips = ({ activeFilters, onRemoveFilter }) => {
    return (
      <div className="flex items-center justify-start flex-wrap gap-2 ml-2">
        <span className="text-sm text-gray-500">Applied Filters: </span>
        {activeFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onRemoveFilter(filter.id)}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm text-black-color border shadow-black border-black-color"
          >
            {filter.label}
            <span className="ml-2 text-black-color">×</span>
          </button>
        ))}
      </div>
    )
  }
  
  export default FilterChips
  
  