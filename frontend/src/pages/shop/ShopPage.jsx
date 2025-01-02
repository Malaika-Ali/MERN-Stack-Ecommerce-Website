import React, { useEffect, useState } from 'react'
import ProductsGrid from '../../components/products/ProductsGrid'
import products from '../../data/products.json'

const ShopPage = () => {

  const filters = {
    category: ["all", "bags", "accessories"],
    priceRange: [
      { label: "Under $50", min: 0, max: 50 },
      { label: "50-100", min: 50, max: 100 },
      { label: "100-200", min: 100, max: 200 },

    ]
  }

  const [productsData, setProductsData] = useState(products)
  const [filteredState, setFilteredState] = useState({
    category: "all",
    priceRange: ""
  })

  // filter function
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

  useEffect(()=>{
    console.log("filter rnning")
    filter()
  }, [filteredState])

  const clearFilters=()=>{
    setFilteredState({
       category: "all",
    priceRange: ""
    })
  }


  return (
    <div className='mt-20'>
      <div>banner same as  category pae and search page</div>
      <div>Sidebar type container to show categories and price selectors</div>

      <div>
        <button type='button' onClick={()=>setFilteredState({category:"accessories", price:""})}>set filter</button>
        <button type='button' onClick={clearFilters}>clear filters</button>
      </div>
      <ProductsGrid products={productsData} />


    </div>
  )
}

export default ShopPage
