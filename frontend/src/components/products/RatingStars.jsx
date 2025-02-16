// import React from 'react'
// import { RiStarSFill, RiStarSLine } from "react-icons/ri";

// const RatingStars = ({rating, className=""}) => {
//     const stars=[]
//     for (let i = 1; i <= 5; i++) {
//         stars.push(
//             <span key={i} className={`text-sm md:text:lg lg:text-xl ${className}`} >
//             {i <= rating ? <RiStarSFill className='text-yellow-400' /> : <RiStarSLine className='text-yellow-400' />}
//             </span>
//         )        
//     }
//   return (
//     <div className='flex justify-center items-center'>
//       {stars}
//     </div>
//   )
// }

// export default RatingStars


import React from 'react';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { TbStarHalfFilled } from "react-icons/tb";

const RatingStars = ({ rating, className = "" }) => {
    const stars = [];
    const integerPart = Math.floor(rating);
    const decimalPart = rating - integerPart;

    for (let i = 1; i <= 5; i++) {
        if (i <= integerPart) {
            stars.push(<RiStarSFill key={i} className={`text-yellow-400 ${className}`} />);
        } else if (i === integerPart + 1 && decimalPart >= 0.5) {
            stars.push(<TbStarHalfFilled size={12} key={i} className={`text-yellow-400 ${className}`} />);
        } else {
            stars.push(<RiStarSLine key={i} className={`text-yellow-400 ${className}`} />);
        }
    }

    return (
        <div className='flex justify-center items-center space-x-1'>
            {stars}
        </div>
    );
};

export default RatingStars;

