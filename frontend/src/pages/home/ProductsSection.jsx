import React, { lazy, Suspense } from 'react'
// import ProductsGrid from '../../components/products/ProductsGrid'
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'
import TransparentButton from '../../components/buttons/TransparentButton'
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

import Loadable from "../../utils/Loadable";
import ComponentLoader from '../../utils/ComponentLoader';
import CustomErrorBoundary from '../../utils/ErrorBoundary';
import { useEffect } from 'react';
const ProductsGrid = Loadable(lazy(() => import('../../components/products/ProductsGrid')))


const ProductsSection = () => {

  const navigate = useNavigate()
  const { data: response = {}, error, isLoading, isFetching } = useFetchAllProductsQuery(
    {
      page: 1,
      limit: 8
    }
  )
  // if (isLoading) return (<ComponentLoader />)
  const products = response?.data?.products
  return (
    <section className='min-h-[1000px]'>
      {/* <CustomErrorBoundary>
        <Suspense fallback={<ComponentLoader />}>

          <ProductsGrid products={products} headingTitle='Our Latest Arrivals' textalignment='text-center' />
        </Suspense>
      </CustomErrorBoundary> */}

      {/* <CustomErrorBoundary> */}
      {/* <Suspense fallback={<ComponentLoader />}> */}


      {/* {isLoading ? (
        <ComponentLoader />
      ) : (
        <ProductsGrid
          products={products}
          headingTitle="Our Latest Arrivals"
          textalignment="text-center"
        />
      )} */}

{/* 
      <ProductsGrid
        products={products}
        headingTitle="Our Latest Arrivals"
        textalignment="text-center"
      /> */}

      {isFetching ? (
        <ComponentLoader />
      ) : (
        <ProductsGrid
          products={products}
          headingTitle="Our Latest Arrivals"
          textalignment="text-center"
        />
      )}




      {/* </Suspense> */}
      {/* </CustomErrorBoundary> */}

      <div className="flex justify-center mt-8">
        <TransparentButton children="Show More" icon={GoArrowRight} onClick={() => navigate("/shop")} />
      </div>
    </section>
  )
}

export default ProductsSection
