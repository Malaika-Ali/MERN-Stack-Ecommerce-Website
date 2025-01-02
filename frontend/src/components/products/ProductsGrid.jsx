import React from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = ({products}) => {


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Responsive Product Grid</h1>
        <h2 className="text-3xl">Tailwind CSS</h2>
      </div>
      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-2 gap-x-14 mt-10 mb-5">
        {products.map(product => (
          <ProductCard key={product.id} id={product.id} name={product.name} price={product.originalPrice} oldPrice={product.price} rating={product.rating} image={product.imageUrl} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductsGrid;

