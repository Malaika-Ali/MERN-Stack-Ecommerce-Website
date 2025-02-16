import React from 'react';
import TransparentButton from '../../components/buttons/TransparentButton';
import { BsArrowDown } from "react-icons/bs";
import RatingStars from '../../components/products/RatingStars';
import SectionHeading from '../../components/headings/SectionHeading';

const ReviewSection = ({reviews, totalReviews}) => {
 
const dateFormatter=(date)=>{
  date=new Date(date)
  const options = { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  };
  
return date.toLocaleDateString('en-GB', options);
}

  return (
    <div className="mx-auto px-4 py-8 container">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <SectionHeading title={`RATING & REVIEWS (${totalReviews})`} className='text-xl'/>
        {/* <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Filter by</span>
          <select className="border rounded-md px-2 py-1 text-sm bg-white">
            <option value="5">★ 5</option>
            <option value="4">★ 4</option>
            <option value="3">★ 3</option>
            <option value="2">★ 2</option>
            <option value="1">★ 1</option>
          </select>
        </div> */}
      </div>

      {/* Reviews Grid */}
      <div className={`grid ${totalReviews!=0 ? "md:grid-cols-2" : ""} gap-6`}>
        {totalReviews ==0 ? <div className='flex items-center justify-center'>No Reviews Yet</div> :
        reviews?.map((review) => (
          <div key={review.id} className="border rounded-lg p-6 bg-white">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              {/* <img 
                src={review.avatar || "/placeholder.svg"} 
                alt={`${review.name}'s avatar`}
                className="w-12 h-12 rounded-full object-cover"
              />
               */}
              <div className="flex-1">
                {/* User Info and Rating */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{review?.userId?.name}</h3>
                    <div className="flex gap-1 mt-1">
                     <RatingStars rating={review.rating}/>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{dateFormatter(review.createdAt)}</span>
                </div>

                {/* Review Content */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {review.comment}
                </p>

              
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {
        totalReviews>0 && (
          <div className="flex justify-center mt-8">
          <TransparentButton children="Show More" icon={BsArrowDown} />
        </div>  
        )
      }
     
    </div>
  );
};

export default ReviewSection;

