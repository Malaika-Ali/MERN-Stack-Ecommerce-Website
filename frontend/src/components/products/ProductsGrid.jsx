import React from 'react';
import ProductCard from './ProductCard';
import SectionHeading from '../headings/SectionHeading';

const ProductsGrid = ({ products, headingTitle, headingSubTitle, textalignment }) => {

  console.log(products)

  return (
    <div className={`container mx-auto px-4 py-8 ${headingTitle? 'py-8': "py-2"}`}>
    {headingTitle &&
    <SectionHeading title={headingTitle} subtitle={headingSubTitle} textalignment={textalignment}/>
    }      
  <section 
    className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 ${headingTitle ? 'lg:mt-14': 'lg:mt-0'}`}>
    {products.map(product => (
      <ProductCard key={product._id} id={product._id} name={product.productName} price={product.price} oldPrice={product.price} rating={product.rating} image={product.images[0]} product={product} category={product.category} color={product.color} />
    ))}
  </section>
</div>
  );
};

export default ProductsGrid;

