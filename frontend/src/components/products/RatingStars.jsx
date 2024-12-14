import React from 'react'
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const RatingStars = ({rating}) => {
    const stars=[]
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className=' text-sm md:text:lg lg:text-xl' >
            {i <= rating ? <RiStarSFill className='text-yellow-400' /> : <RiStarSLine className='text-yellow-400' />}
            </span>
        )        
    }
  return (
    <div className='flex justify-center items-center'>
      {stars}
    </div>
  )
}

export default RatingStars
