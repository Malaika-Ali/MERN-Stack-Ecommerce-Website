import React, { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetSingleProductQuery } from '../../redux/features/products/productsApi'
import { useGetReviewsQuery } from '../../redux/features/reviews/reviewsApi'

import Loadable from '../../utils/Loadable'
import ComponentLoader from '../../utils/ComponentLoader'
import CustomErrorBoundary from '../../utils/ErrorBoundary'

function index() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const ProductDetails = Loadable(lazy(() => import('./ProductDetails')))
  const Suggestions = Loadable(lazy(() => import('./Suggestions')))
  const Reviews = Loadable(lazy(() => import('./Reviews')))
  const { data, error, isLoading } = useGetSingleProductQuery(id)
  const product = data?.data?.product;

  // Fetch product reviews
  const productId = id
  const { data: reviewsData, error: reviewsError, isLoading: isReviewsLoading } = useGetReviewsQuery(productId);
  const reviews = reviewsData?.data?.productReviews;
  const totalReviews = reviewsData?.data?.productReviewsNumber;

  document.title = `Product Details | ${product?.productName}`

  return (
    <>
      <CustomErrorBoundary>
        <Suspense fallback={<ComponentLoader />}>
          <ProductDetails name={product?.productName} description={product?.description} category={product?.category} image={product?.images[0]} price={product?.price} originalPrice={product?.originalPrice} rating={product?.rating} images={product?.images} productQuantity={product?.quantity} color={product?.color} material={product?.material} fabric={product?.fabric} />
        </Suspense>
      </CustomErrorBoundary>

      <CustomErrorBoundary>
        <Suspense fallback={<ComponentLoader />}>
          <Reviews reviews={reviews} totalRating={product?.rating} totalReviews={totalReviews} />
        </Suspense>
      </CustomErrorBoundary>

      <CustomErrorBoundary>
        <Suspense fallback={<ComponentLoader />}>
          <Suggestions productId={productId} />
        </Suspense>
      </CustomErrorBoundary>
    </>
  )
}

export default index
