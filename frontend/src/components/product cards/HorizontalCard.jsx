import React from 'react'

const HorizontalCard = () => {
  return (
    <div className="flex gap-4 bg-gray-200 p-4 rounded-lg">
    <div className="w-[100px] h-[100px] bg-gray-50 rounded-md flex items-center justify-center p-2">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-4d4611f9ff58443390500ac18ca5e61e-rQvpOFQNGvc4ndFGhIaHSuh7xphvLA.webp"
        alt="Sentinel Jacket"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-normal">Sentinel Jacket</h3>
      <div className="mt-1 space-y-0.5">
      <div className="text-xs text-gray-500">Category: Gray</div>
        <div className="text-xs text-gray-500">Size: L</div>

        {/* <div className="flex justify-between items-center w-full"> */}
        <div className="text-xs text-gray-500">Qty: 1</div>

       
      {/* </div> */}
      </div>
    
    </div>
    <div className="text-right flex flex-col justify-between pt-1">
      <span className="font-medium">$49.00</span>
      <div className="flex items-center gap-3 pb-4 lg:pb-5">
        <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm">
          -
        </button>
        <span className="text-sm">1</span>
        <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm bg-black text-white">
          +
        </button>
      </div>
    </div>
  </div>
  )
}

export default HorizontalCard
