import React, { lazy, Suspense } from 'react'
// import ProductsGrid from '../../components/products/ProductsGrid'
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'
import TransparentButton from '../../components/buttons/TransparentButton'
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

import Loadable from "../../utils/Loadable";
import ComponentLoader from '../../utils/ComponentLoader';
import CustomErrorBoundary from '../../utils/ErrorBoundary';

const ProductsSection = () => {
const ProductsGrid=Loadable(lazy(()=>import('../../components/products/ProductsGrid')))

  const navigate=useNavigate()
    const { data: response = {}, error, isLoading } = useFetchAllProductsQuery(
        {
          page: 1,
          limit: 8
        }
      )
        if (isLoading) return (<ComponentLoader/>)
        const products = response?.data?.products
  return (
    <div>
<CustomErrorBoundary>
  <Suspense fallback={<ComponentLoader/>}>
  <ProductsGrid products={products} headingTitle='Our Latest Arrivals' textalignment='text-center'/> 
  </Suspense>
  </CustomErrorBoundary>

    <div className="flex justify-center mt-8">
        <TransparentButton children="Show More" icon={GoArrowRight} onClick={()=>navigate("/shop")} />
      </div> 
    </div>
  )
}

export default ProductsSection
