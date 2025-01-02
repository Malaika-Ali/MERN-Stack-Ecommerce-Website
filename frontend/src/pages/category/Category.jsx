import React, { useEffect,  useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products.json'
import ProductsGrid from '../../components/products/ProductsGrid'

function Category() {

    const {categoryName}=useParams()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        const filtered=products.filter((product)=> product.category===categoryName.toLocaleLowerCase())
        setFilteredProducts(filtered)
    },[categoryName])

  return (
   <div className='mt-10'>
    <ProductsGrid products={filteredProducts} />
   </div>
  )
}

export default Category
