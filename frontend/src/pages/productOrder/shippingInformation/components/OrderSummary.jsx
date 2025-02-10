import HorizontalCard from "../../../../components/product cards/HorizontalCard";
import { useSelector } from 'react-redux';

export default function OrderSummary() {

    const products = useSelector(state => state.cart.products)  
    const grandTotal = useSelector(state => state.cart.grandTotal)  
    const tax = useSelector(state => state.cart.tax)  


    console.log(products)  
   
    return (
      <div className="w-full max-w-md border border-gray-200 rounded-xl p-6">
        <h2 className="text-2xl font-[500] mb-8">Your Order</h2>
        <div className="space-y-6">
          {
            products.map((item)=>(
              <HorizontalCard key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} image={item.image} category={item.category} />
            ))
          }
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-[500] mb-4 text-xl">Order Summary</h3>
          {tax>0 && (
              <div className="flex justify-between items-center">
              <span className="text-sm">Delivery Charges</span>
              <span className="font-[400] text-stone-600">Rs. {tax}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-sm">Subtotal</span>
            <span className="font-semibold">Rs. {grandTotal}</span>
          </div>
        </div>
      </div>
    )
  }
  
  