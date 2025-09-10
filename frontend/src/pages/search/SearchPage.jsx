import { useEffect, useState, useCallback } from 'react'
import ProductsGrid from '../../components/products/ProductsGrid'
import ShopHero from '../shop/ShopHero'
import SearchInput from './SearchInput'

import { debounce } from '../../utils/debounce'
import Filter from './Filter'

const SearchPage = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [searchedProducts, setSearchedProducts] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("")

  const handleSuggestions = async () => {
    // if (!searchQuery.trim()) {
    //   setSuggestions([])
    //   setSearchedProducts([])
    //   setShowSearchResults(false)
    // }

    setIsLoading(true)
    try {
      console.log(selectedFilter)
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/search?q=${encodeURIComponent(searchQuery)}&category=${selectedFilter}`)
      const data = await response.json()
      const products = data.data || []
      setSuggestions(products.slice(0, 5))
    } catch (error) {
      console.log("An error occured while searching ", searchQuery, error)
      setSuggestions([])
      setSearchedProducts([])
    }
    finally {
      setIsLoading(false)
    }
  }

  const handleSearch = () => {
    setSearchedProducts(suggestions)
  }

  // Clear everything when search query is empty
  // useEffect(() => {
  //   if (!searchQuery.trim()) {
  //     setSearchedProducts([])
  //     setShowSearchResults(false)
  //     setSuggestions([])
  //   }
  // }, [searchQuery])

  const debouncedHandleSearch = useCallback(debounce(handleSuggestions, 500), [])
  useEffect(() => {
    if (searchQuery) {
      debouncedHandleSearch(searchQuery)
    }
  }, [searchQuery, selectedFilter, debouncedHandleSearch])

  return (
    <>
      <ShopHero />
      <SearchInput value={searchQuery} setSearchQuery={setSearchQuery} suggestions={suggestions} handleSearch={handleSearch} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />

      {
        // if there's a search query
        searchQuery.trim() ? (
          // if there's a search query and the api is loading
          isLoading ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="mt-2 text-gray-600">Searching...</p>
            </div>
          ) :
            // if there's a search query & no loading and products.length is greater than 0
            (
              searchedProducts?.length > 0 ? (
                <ProductsGrid products={searchedProducts} searchQuery={searchQuery} />
              ) :
                // if there's a search query and no loading and no product in the product's array
                (
                  <div className="text-center py-10 text-gray-500">
                    No products found matching your search
                  </div >
                )
            )
        ) :
          (
            // If there's no search query
            <div className="text-center py-2 mt-0 mb-24 text-gray-500 text-base">
              Type Something to search from our store
            </div >
          )
      }

    </>

  )
}

export default SearchPage
