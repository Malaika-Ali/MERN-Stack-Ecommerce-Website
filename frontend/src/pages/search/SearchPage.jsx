import React, {useEffect, useState} from 'react'
import products from '../../data/products.json'
import ProductsGrid from '../../components/products/ProductsGrid'

const SearchPage = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [searchedProducts, setSearchedProducts] = useState(products)

   const handleSearch=()=>{
    const query=searchQuery.toLowerCase()

    const searched=products.filter((product)=>product.name?.toLowerCase().includes(query) || product.category?.toLowerCase().includes(query) || product.description?.toLowerCase().includes(query))

    setSearchedProducts(searched)
   }


  return (
    <div className='mt-20'>
        <div>banner same as caegories page</div>
        <div>wide input field
            <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
            <button type='button' onClick={handleSearch}>search</button>
        </div>
        <ProductsGrid products={searchedProducts}/>
      
    </div>
  )
}

export default SearchPage
