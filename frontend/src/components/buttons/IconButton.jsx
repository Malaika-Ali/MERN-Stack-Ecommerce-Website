import React from 'react'

const IconButton = ({
    children,
    type,
    className="",
    handleClick,
    ...props

}) => {

    console.log("Button re rendered")
  return (
    <button 
    type={type} 
    onClick={handleClick}
    className={`bg-black text-white text-center flex items-center justify-center text-sm font-normal rounded-full hover:bg-gray-800 ${className}`
}
{...props}
  >
    {children}
  </button>
  )
}

export default IconButton
