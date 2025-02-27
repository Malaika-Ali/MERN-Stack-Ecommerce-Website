import React from 'react'
import ProductCard from '../../components/products/ProductCard';
import SectionHeading from '../../components/headings/SectionHeading';
import { useFetchRelatedProductsQuery } from '../../redux/features/products/productsApi';

const Suggestions = ({productId}) => {
    const { data } = useFetchRelatedProductsQuery(productId);

    const products = data?.data || [];
      

  return (
    <div className="container mx-auto px-4 py-8">
    <SectionHeading title="Complete Your Look" textalignment="text-left" className='font-[500] text-2xl'/>
    <div
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:mt-14">
      {products.map((product) => (
        <ProductCard key={product.id} id={product.id} name={product.productName} price={product.price} rating={product.rating} image={product.images[0]} product={product} />
      ))}
    </div>
  </div>
  )
}

export default Suggestions
