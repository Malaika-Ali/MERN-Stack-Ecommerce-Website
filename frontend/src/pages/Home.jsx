import React from 'react'
import LandinPageHero from '../components/heroes/LandinPageHero'
import CategoriesSection from '../components/categories/CategoriesSection'
import SubCategories from '../components/categories/SubCategories'
import ProductsGrid from '../components/products/ProductsGrid'

const Home = () => {
  return (
  <>
  <LandinPageHero/>
  <CategoriesSection/>
  <SubCategories/>
  <ProductsGrid/>
  </>
  )
}

export default Home
