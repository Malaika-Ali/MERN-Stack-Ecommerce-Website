import React from 'react'
import LandinPageHero from './LandinPageHero'
import CategoriesSection from '../../components/categories/CategoriesSection'
import SubCategories from '../../components/categories/SubCategories'
import ProductsGrid from '../../components/products/ProductsGrid'
import CategorySection from './categories section/CategorySection'
import products from '../../data/products.json'

const Home = () => {
  return (
  <>
  <LandinPageHero/>
  <CategorySection/>
  {/* <SubCategories/> */}
  <ProductsGrid products={products} headingTitle='Our New Collection' headingSubTitle='Our latest collection where classic and contemporary styles converge in perfect harmony' textalignment='text-center'/>
  </>
  )
}

export default Home
