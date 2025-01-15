import img from '../../../src/assets/bg1.png'

const ShopHero = () => {
    return (
      <div className="relative bg-[#E5E5E3] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-12 md:py-16">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                20% OFF ONLY TODAY AND GET SPECIAL GIFT!
              </h1>
              <p className="text-gray-600 text-sm">
                Today only, enjoy a stylish 20% off and receive an exclusive gift!
                <br />
                Elevate your wardrobe now!
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
              <img
                src={img}
                alt="Fashion Model"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ShopHero
  
  