import React from 'react'
import ProductDetails from './ProductDetails'
import Suggestions from './Suggestions'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetSingleProductQuery } from '../../redux/features/products/productsApi'
import Reviews from './Reviews'
import { useGetReviewsQuery } from '../../redux/features/reviews/reviewsApi'


function index() {

  const {id}=useParams()

  const dispatch=useDispatch()
  const {data,error, isLoading}=useGetSingleProductQuery(id)
  console.log("the data is", data)
  const product = data?.data?.product;
  console.log("The product is",product)


  // Fetch product reviews
  const productId=id
  const { data: reviewsData, error: reviewsError, isLoading: isReviewsLoading } = useGetReviewsQuery(productId);
  const reviews = reviewsData?.data?.productReviews;
  const totalReviews = reviewsData?.data?.productReviewsNumber;
  console.log('rev data', reviewsData)
  console.log("reviews",reviews)
  return (
    <>
      <ProductDetails name={product?.productName} description={product?.description} category={product?.category} image={product?.images[0]} price={product?.price} rating={product?.rating} images={product?.images} productQuantity={product?.quantity}/>
      <Reviews reviews={reviews} totalRating={product?.rating} totalReviews={totalReviews}/>
      <Suggestions/>
    </>
  )
}

export default index
