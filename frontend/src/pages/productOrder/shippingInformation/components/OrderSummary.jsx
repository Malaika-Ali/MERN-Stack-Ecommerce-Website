import HorizontalCard from "../../../../components/product cards/HorizontalCard";
import { useSelector } from 'react-redux';

export default function OrderSummary() {

    const products = useSelector(state => state.cart.products)
    console.log(products)
  
    return (
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-[500] mb-8">Your Order</h2>
        <div className="space-y-6">
          {/* Sentinel Jacket */}
          {/* <div className="flex gap-4">
            <div className="w-[100px] h-[100px] bg-gray-50 rounded-md flex items-center justify-center p-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-4d4611f9ff58443390500ac18ca5e61e-rQvpOFQNGvc4ndFGhIaHSuh7xphvLA.webp"
                alt="Sentinel Jacket"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-gray-500">JKT / Jackets</div>
              <h3 className="font-normal">Sentinel Jacket</h3>
              <div className="mt-1 space-y-0.5">
                <div className="text-xs text-gray-500">Size: L</div>
                <div className="text-xs text-gray-500">Color: Gray</div>
                <div className="text-xs text-gray-500">Qty: 1</div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm">
                  -
                </button>
                <span className="text-sm">1</span>
                <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm bg-black text-white">
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="font-normal">$49.00</span>
            </div>
          </div> */}

          <HorizontalCard/>
  
          {/* Boa Fleece Jacket */}
          {/* <div className="flex gap-4">
            <div className="w-[100px] h-[100px] bg-gray-50 rounded-md flex items-center justify-center p-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-4d4611f9ff58443390500ac18ca5e61e-rQvpOFQNGvc4ndFGhIaHSuh7xphvLA.webp"
                alt="Boa Fleece Jacket"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-gray-500">JKT / Jackets</div>
              <h3 className="font-normal">Boa Fleece Jacket</h3>
              <div className="mt-1 space-y-0.5">
                <div className="text-xs text-gray-500">Size: L</div>
                <div className="text-xs text-gray-500">Color: Black-Navy</div>
                <div className="text-xs text-gray-500">Qty: 1</div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm">
                  -
                </button>
                <span className="text-sm">1</span>
                <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm bg-black text-white">
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="font-normal">$122.00</span>
            </div>
          </div> */}
          <HorizontalCard/>
        </div>
  
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-[500] mb-4 text-xl">Order Summary</h3>
          <div className="flex justify-between items-center">
            <span className="text-sm">Subtotal</span>
            <span className="font-semibold">$171.00</span>
          </div>
        </div>
      </div>
    )
  }
  
  