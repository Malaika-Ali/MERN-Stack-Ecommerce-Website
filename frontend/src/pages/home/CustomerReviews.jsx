import { useState } from "react"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md";
import RatingStars from "../../components/products/RatingStars";
import SectionHeading from "../../components/headings/SectionHeading";

const testimonials = [
  {
    rating: 5,
    text: "Pagedone is simply the best tool of investment in the market right now.",
    author: {
      name: "Emily Johnson",
      city: "NYC",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    rating: 5,
    text: "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
    author: {
      name: "Jassie Miller",
      city: "Florida",
      image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    rating: 5,
    text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
    author: {
      name: "Olivia Carter",
      city: "Texas",
      image: "https://images.unsplash.com/photo-1614436201459-156d322d38c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    rating: 4.9,
    text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
    author: {
      name: "Jennifer Mayo",
      city: "LA",
      image: "https://images.unsplash.com/photo-1598625873873-52f9aefd7d9d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    rating: 4.9,
    text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
    author: {
      name: "Sazzy Loro",
      city: "LA",
      image: "https://images.unsplash.com/photo-1612994451093-c6791c8989cd?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    rating: 4.9,
    text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
    author: {
      name: "Tamina Suzoka",
      city: "LA",
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="bg-gray-100 container mx-auto rounded-xl flex items-center py-12 px-4 my-8">
      <div className="max-w-7xl mx-auto px-4 py-4 w-full">
        <div className="flex justify-between items-center mb-8">
          {/* <h2 className="text-2xl font-[500] text-gray-900">Our Customers Feedback</h2> */}
          <SectionHeading title="Our Customers Feedback"/>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="rounded-full w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 flex justify-center items-center"
            >
              <MdKeyboardArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full w-10 h-10 bg-black-color border border-gray-300 text-white hover:bg-stone-700 flex justify-center items-center transition-all duration-500 ease-linear"
            >
              <MdKeyboardArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Adjust translateX based on the number of testimonials per slide
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ flex: "0 0 calc(33.333% - 16px)" }} // Ensure each testimonial takes up 1/3 of the container width
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="flex justify-start">
                    <RatingStars rating={testimonial.rating} />
                  </div>
                  <p className="text-gray-600 mb-8 text-[15px] leading-relaxed pt-5">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.author.image || "/placeholder.svg"}
                      alt={testimonial.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.author.name}</div>
                      <div className="text-sm text-gray-500">From {testimonial.author.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

