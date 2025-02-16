import React from 'react'

const SectionHeading = ({ title, subtitle, textalignment, className='' }) => {
  return (
    <div className={`${textalignment}`}>
    <h2 className={`text-3xl font-[500] tracking-tight text-gray-900 sm:text-4xl ${className}`}>{title}</h2>
    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
     {subtitle} 
    </p>
  </div>

  )
}

export default SectionHeading
