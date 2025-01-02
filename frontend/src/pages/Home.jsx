import React from 'react'
import LandinPageHero from '../components/heroes/LandinPageHero'
import CategoriesSection from '../components/categories/CategoriesSection'
import SubCategories from '../components/categories/SubCategories'
import ProductsGrid from '../components/products/ProductsGrid'

const products = [
  {
    id: "1",
    name: "Classic White Sneakers",
    brand: "Urban Style",
    price: 149,
    originalPrice: 199,
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    name: "Leather Backpack",
    brand: "Adventure Gear",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    name: "Wireless Headphones",
    brand: "Sound Pro",
    price: 149,
    originalPrice: 199,
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "4",
    name: "Smart Watch",
    brand: "Tech Elite",
    price: 149,
    originalPrice: 199,
    rating: 4.2,
    imageUrl: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "5",
    name: "Sunglasses",
    brand: "Summer Vibes",
    price: 149,
    originalPrice: 199,
    rating: 3,
    imageUrl: "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "6",
    name: "Running Shoes",
    brand: "Active Life",
    price: 149,
    originalPrice: 199,
    rating: 3.6,
    imageUrl: "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const Home = () => {
  return (
  <>
  <LandinPageHero/>
  <CategoriesSection/>
  <SubCategories/>
  <ProductsGrid products={products}/>
  </>
  )
}

export default Home
