import bg4 from "../../assets/new.png"

export default function ShopHero() {
  return (
    <div className="relative min-h-[400px]  max-w-7xl mx-4 lg:mx-auto overflow-hidden bg-gray-100 rounded-3xl my-2 px-8 z-[5]">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between h-full py-8 md:py-0">
        {/* Text Content */}
        <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-stone-800 mb-4 z-20">
            20% OFF ONLY TODAY AND GET SPECIAL GIFT!
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Today only, enjoy a stylish 20% off and receive an exclusive gift! Elevate your wardrobe now!
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-[200px] sm:h-[300px] md:h-[400px] flex md:justify-end">
          <img
            src={bg4 || "/placeholder.svg"}
            alt="Fashion model"
            className="object-cover  rounded-xl md:rounded-none"
          />
        </div>
      </div>
    </div>
  )
}