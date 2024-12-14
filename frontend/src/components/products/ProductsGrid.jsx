import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: "1",
    name: "Classic White Sneakers",
    brand: "Urban Style",
    price: 149,
    originalPrice: 199,
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    name: "Leather Backpack",
    brand: "Adventure Gear",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    name: "Wireless Headphones",
    brand: "Sound Pro",
    price: 149,
    originalPrice: 199,
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "4",
    name: "Smart Watch",
    brand: "Tech Elite",
    price: 149,
    originalPrice: 199,
    rating: 4.2,
    imageUrl: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "5",
    name: "Sunglasses",
    brand: "Summer Vibes",
    price: 149,
    originalPrice: 199,
    rating: 3,
    imageUrl: "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "6",
    name: "Running Shoes",
    brand: "Active Life",
    price: 149,
    originalPrice: 199,
    rating: 3.6,
    imageUrl: "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const ProductsGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Responsive Product Grid</h1>
        <h2 className="text-3xl">Tailwind CSS</h2>
      </div>
      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-2 gap-x-14 mt-10 mb-5">
        {products.map(product => (
          <ProductCard key={product.id} name={product.name} price={product.originalPrice} oldPrice={product.price} rating={product.rating} image={product.imageUrl} />
        ))}
      </section>
    </div>
  );
};

export default ProductsGrid;

