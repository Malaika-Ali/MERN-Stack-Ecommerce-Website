import React from 'react'

const IconButton = ({
    children,
    type,
    className="",
    handleClick,
    ...props

}) => {

  return (
    <button 
    type={type} 
    onClick={handleClick}
    className={`text-gray-600 text-center flex items-center justify-center text-base font-[600] rounded-full border border-grey-color hover:bg-stone-200 ${className}`
}
{...props}
  >
    {children}
  </button>
  )
}

export default IconButton
