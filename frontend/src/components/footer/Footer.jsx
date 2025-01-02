import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer className="w-full bg-white mt-4">
      {/* Logo and Newsletter Section */}
      <div className="container mx-auto px-4 pt-8 grid md:grid-cols-2 md:gap-4 lg:gap-2">
        <div className="flex flex-col items-start space-y-4 mb-12">
          <Link href="/" className="inline-block">
          <h1 className="text-3xl font-bold text-black-color">M<span className='text-grey-color text-3xl'>.</span> </h1>
          </Link>
          <p className="text-sm text-gray-600 max-w-[280px]">
            Get updates on new products, special promotions, and best discount for all item.
          </p>
          <form className="flex w-full max-w-[400px] gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 h-10 px-4 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-gray-400"
            />
            <button 
              type="submit" 
              className="px-6 h-10 bg-black text-white text-sm font-normal rounded-full hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-1">
              {['News', 'Event', 'Best Seller', 'Promo', 'Bestsellers', 'Trends'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Categories</h3>
            <ul className="space-y-1">
              {['Man', 'Woman', 'Kids', 'Gift', 'New Arrival'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Our Social Media</h3>
            <ul className="space-y-1">
              {['Instagram', 'Facebook', 'Twitter'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-row md:items-center justify-between gap-4">
            <p className="text-xs">
              © {new Date().getFullYear()} M.B Production
            </p>
            <div className="flex flex-wrap gap-6">
              {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs hover:text-gray-300 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

