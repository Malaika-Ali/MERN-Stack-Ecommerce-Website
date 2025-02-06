import React from 'react'
import LandinPageHero from './LandinPageHero'
import ProductsGrid from '../../components/products/ProductsGrid'
import CategorySection from './categories section/CategorySection'
import products from '../../data/products.json'

import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'
import PromotionalBanner from './PromotionalBanner'
import CustomerReviews from './CustomerReviews'

const Home = () => {

   const { data: response = {}, error, isLoading } = useFetchAllProductsQuery(
    {
      // category: category == "all",
      // minPrice:  "" ,
      // maxPrice: "",
      // page: currentPage,
      // limit: productsPerPage
    }
  )
    if (isLoading) return <div>Loading</div>
    if (error) return <div>Error</div>
    console.log(response)
    const products = response?.data?.products
   

  return (
  <>
  <LandinPageHero/>
  <CategorySection/>
  {/* <SubCategories/> */}
  <ProductsGrid products={products} headingTitle='Our New Collection' textalignment='text-center'/>
  <CustomerReviews/>
  <PromotionalBanner/>
  </>
  )
}

export default Home
