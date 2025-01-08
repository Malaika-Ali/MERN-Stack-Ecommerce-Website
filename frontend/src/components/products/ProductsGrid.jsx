import React from 'react';
import ProductCard from './ProductCard';
import SectionHeading from '../headings/SectionHeading';

const ProductsGrid = ({ products }) => {


  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeading title="Our New Collection" subtitle="Our latest collection where classic and contemporary styles converge in perfect harmony" textalignment="text-center"/>
      <section id="Projects" 
        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:mt-14">
        {products.map(product => (
          <ProductCard key={product.id} id={product.id} name={product.name} price={product.originalPrice} oldPrice={product.price} rating={product.rating} image={product.imageUrl} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductsGrid;

