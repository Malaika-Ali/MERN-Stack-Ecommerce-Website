import React from 'react'
import ProductCard from '../../components/products/ProductCard';
import SectionHeading from '../../components/headings/SectionHeading';
import { useFetchRelatedProductsQuery } from '../../redux/features/products/productsApi';

const Suggestions = ({productId}) => {

    // const products = [
    //     {
    //       id: "1",
    //       name: "Classic White Heels",
    //       brand: "Urban Style",
    //       price: 149,
    //       originalPrice: 199,
    //       rating: 4,
    //       imageUrl: "https://images.pexels.com/photos/26856051/pexels-photo-26856051/free-photo-of-woman-legs-in-boots-with-high-heels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //       id: "2",
    //       name: "Women's Coat",
    //       brand: "Adventure Gear",
    //       price: 149,
    //       originalPrice: 199,
    //       rating: 4.6,
    //       imageUrl: "https://images.pexels.com/photos/6702736/pexels-photo-6702736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //       id: "3",
    //       name: "Brown Boats",
    //       brand: "Sound Pro",
    //       price: 149,
    //       originalPrice: 199,
    //       rating: 5,
    //       imageUrl: "https://images.pexels.com/photos/27256455/pexels-photo-27256455/free-photo-of-botin-marron.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //       id: "4",
    //       name: "Black Top",
    //       brand: "Tech Elite",
    //       price: 149,
    //       originalPrice: 199,
    //       rating: 4.2,
    //       imageUrl: "https://images.pexels.com/photos/24018568/pexels-photo-24018568/free-photo-of-woman-wearing-black-clothes-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //   ];
    const { data, error, isLoading } = useFetchRelatedProductsQuery(productId);

    console.log(productId)
    const products = data?.data || [];
    console.log(data)
      

  return (
    <div className="container mx-auto px-4 py-8">
    <SectionHeading title="Complete Your Look" textalignment="text-left"/>
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
