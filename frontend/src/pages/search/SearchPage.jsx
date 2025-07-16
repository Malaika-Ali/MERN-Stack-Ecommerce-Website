import { useEffect, useState, useCallback } from 'react'
import ProductsGrid from '../../components/products/ProductsGrid'
import ShopHero from '../shop/ShopHero'
import SearchInput from './SearchInput'

import { debounce } from '../../utils/debounce'

const SearchPage = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [searchedProducts, setSearchedProducts] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  const handleSuggestions = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      setSuggestions(data.data.slice(0, 8))
      // setSearchedProducts(data)
    } catch (error) {
      console.log("An error occured while searching ", searchQuery, error)
    }
  }

  const handleSearch = () => {
    if (showSearchResults) setSearchedProducts(suggestions)
  }

  const debouncedHandleSearch = useCallback(debounce(handleSuggestions, 1000), [])
  useEffect(() => {
    if (searchQuery) {
      debouncedHandleSearch(searchQuery)
    }
  }, [searchQuery, debouncedHandleSearch])

  return (
    <>
      <ShopHero />
      <SearchInput value={searchQuery} setSearchQuery={setSearchQuery} suggestions={suggestions} setShowSearchResults={setShowSearchResults} handleSearch={handleSearch} />
      {
        showSearchResults && (
          <ProductsGrid products={searchedProducts} />
        )
      }
    </>

  )
}

export default SearchPage
