import React from 'react'
import LandinPageHero from '../../components/heroes/LandinPageHero'
import CategoriesSection from '../../components/categories/CategoriesSection'
import SubCategories from '../../components/categories/SubCategories'
import ProductsGrid from '../../components/products/ProductsGrid'
import CategorySection from './categories section/CategorySection'

const products = [
  {
    id: "1",
    name: "Classic White Heels",
    brand: "Urban Style",
    price: 149,
    originalPrice: 199,
    rating: 4,
    imageUrl: "https://images.pexels.com/photos/26856051/pexels-photo-26856051/free-photo-of-woman-legs-in-boots-with-high-heels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    name: "Women's Coat",
    brand: "Adventure Gear",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    imageUrl: "https://images.pexels.com/photos/6702736/pexels-photo-6702736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    name: "Brown Boats",
    brand: "Sound Pro",
    price: 149,
    originalPrice: 199,
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/27256455/pexels-photo-27256455/free-photo-of-botin-marron.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "4",
    name: "Black Top",
    brand: "Tech Elite",
    price: 149,
    originalPrice: 199,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/24018568/pexels-photo-24018568/free-photo-of-woman-wearing-black-clothes-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "5",
    name: "Men's Sneakers",
    brand: "Summer Vibes",
    price: 149,
    originalPrice: 199,
    rating: 3,
    imageUrl: "https://images.pexels.com/photos/5413296/pexels-photo-5413296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "6",
    name: "Running Shoes",
    brand: "Active Life",
    price: 149,
    originalPrice: 199,
    rating: 3.6,
    imageUrl: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Home = () => {
  return (
  <>
  <LandinPageHero/>
  <CategorySection/>
  {/* <SubCategories/> */}
  <ProductsGrid products={products}/>
  </>
  )
}

export default Home
