import React from 'react'
import ProductsGrid from '../../components/products/ProductsGrid'
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'
import TransparentButton from '../../components/buttons/TransparentButton'
import { GoArrowRight } from "react-icons/go";

const ProductsSection = () => {
    const { data: response = {}, error, isLoading } = useFetchAllProductsQuery(
        {
          page: 1,
          limit: 8
        }
      )
        if (isLoading) return <div>Loading</div>
        if (error) return <div>Error</div>
        const products = response?.data?.products
  return (
    <div>
  <ProductsGrid products={products} headingTitle='Our Latest Arrivals' textalignment='text-center'/> 

    <div className="flex justify-center mt-8">
        <TransparentButton children="Show More" icon={GoArrowRight} />
      </div> 
    </div>
  )
}

export default ProductsSection
