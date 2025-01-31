import React from 'react'

const TransparentButton = ({children, icon:Icon, className='', handleClick, ...props}) => {
  return (
    <button className={`px-5 py-2 flex items-center justify-between gap-2 border border-black-color rounded-full text-base text-black-color hover:bg-black-color hover:text-white transition-colors ${className} group transition-all duration-500 ease-in-out`}
    onClick={handleClick}
    {...props}>
          {children}
          {Icon && <Icon className="w-4 h-4 text-black py-auto group-hover:text-white transition-all duration-300 ease-in-out" />}
        </button>
  )
}

export default TransparentButton
