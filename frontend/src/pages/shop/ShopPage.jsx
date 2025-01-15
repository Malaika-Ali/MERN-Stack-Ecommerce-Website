import React, { useEffect, useState } from 'react'
import ProductsGrid from '../../components/products/ProductsGrid'
import ShopHero from './ShopHero'
import ShopSidebar from './ShopSidebar'
import FilterChips from './FilterChips'
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'
// import { ChevronDown } from 'lucide-react'

const ShopPage = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(8)
  const [filteredState, setFilteredState] = useState({
    category: "all",
    priceRange: ""
  })
  const [activeFilters, setActiveFilters] = useState([])
  const {category, priceRange}=filteredState
  const {minPrice, maxPrice}=priceRange.split('-').map(Number) || {}
  const filters = {
    category: ["all", "clothes", "shoes", "bags", "accessories"],
    priceRange: [
      { label: "Under $50", min: 0, max: 50 },
      { label: "50-100", min: 50, max: 100 },
      { label: "100-200", min: 100, max: 200 },
    ]
  }

// Fetching Data
  const { data: response = {}, error, isLoading}=useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    minPrice: isNaN(minPrice) ? "": minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: productsPerPage
  })
  if(isLoading) return <div>Loading</div>
  if(error) return <div>Error</div>
  console.log(response)
  const products=response.data.products
  const totalProductsNumber=response.data.allProducts


// Products Filtering Logic
  const removeFilter = (filterId) => {
    setActiveFilters(activeFilters.filter(filter => filter.id !== filterId))
  }

  const filter=()=>{
    let filteredProducts=products

    // filter by category
    if(filteredState.category && filteredState.category!=="all"){
      filteredProducts=filteredProducts.filter((product)=>product.category===filteredState.category)
    }
     // filter by Price
     if(filteredState.priceRange){
      const [min,max]=filteredState.priceRange.split('-').map(Number)
      filteredProducts=filteredProducts.filter((product)=>product.price>=min && product.price<=max)
    }

    setProductsData(filteredProducts)
  }

  const clearFilters=()=>{
    setFilteredState({
       category: "all",
    priceRange: ""
    })
  }


  return (
    <div className="bg-white">
      <ShopHero />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64">
            <ShopSidebar 
              filters={filters}
              filteredState={filteredState}
              setFilteredState={setFilteredState}
              clearFilters={clearFilters}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-6">
              <div className="flex items-center justify-start ml-2 mb-4">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-bold text-black">12</span> results from total <span className="font-bold text-black">127</span> for <span className="font-bold text-black">"Jacket & Coats"</span>
                </div>
              </div>
              
              <FilterChips 
                activeFilters={activeFilters}
                onRemoveFilter={removeFilter}
              />
            </div>

            <ProductsGrid products={products} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default ShopPage

