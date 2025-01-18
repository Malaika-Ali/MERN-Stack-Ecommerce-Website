import React from 'react'
import ProductDetails from './ProductDetails'
import Suggestions from './Suggestions'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetSingleProductQuery } from '../../redux/features/products/productsApi'


function index() {

  const {id}=useParams()

  const dispatch=useDispatch()

  const {data,error, isLoading}=useGetSingleProductQuery(id)
  console.log("the data is", data)
  
  const product = data?.data?.product;
 
  console.log("The product is",product)
  return (
    <>
      <ProductDetails name={product?.productName} description={product?.description} image={product?.images[0]} price={product?.price} rating={product?.rating}/>
      <Suggestions/>
    </>
  )
}

export default index
