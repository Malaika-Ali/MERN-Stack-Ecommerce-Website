import { Star } from "lucide-react"
import RatingStars from "../../components/products/RatingStars"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mark T.",
      role: "Interior Designer",
      image: "/placeholder.svg?height=64&width=64",
      rating: 5,
      text: "The quality of the products is outstanding! I bought a crystal vase and was amazed by the intricate details.",
    },
    {
      name: "Marshall M.",
      role: "Event Planner",
      image: "/placeholder.svg?height=64&width=64",
      rating: 5,
      text: "Absolutely love their unique collection of dinnerware. Perfect for hosting special occasions and impressing guests. Highly recommend!",
    },
    {
      name: "Rachel T.",
      role: "Happy Customer",
      image: "/placeholder.svg?height=64&width=64",
      rating: 4,
      text: "The store is a treasure trove of luxury! The staff was helpful, and I found the perfect gift for my sister's wedding.",
    },
  ]

//   const RatingStars = ({ rating }) => {
//     return (
//       <div className="flex gap-1">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
//         ))}
//       </div>
//     )
//   }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-0 top-0 w-2 h-12 bg-yellow-400" />
            <h2 className="text-4xl font-bold pl-6">
              What Our Customers
              <br />
              Are Saying
            </h2>
          </div>
          <p className="text-gray-600 max-w-md">
            Discover why customers love our premium collection of fancy décor and accessories. From luxurious gifts to
            timeless home accents, every piece is crafted to make a statement.
          </p>
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss.PNG-OOCqNyxPNaS5OyTAzFE212Nf8Xwz1J.png"
              alt="Decorative vases with flowers"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Right Column - Testimonials */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black-color rounded-2xl p-6 relative">
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="space-y-3">
                  <RatingStars rating={testimonial.rating} />
                  <p className="text-white">{testimonial.text}</p>
                  <div className="text-yellow-400">
                    -{testimonial.name}, {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

