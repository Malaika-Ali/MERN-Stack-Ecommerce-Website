import React from 'react'

const OutlinedInput = ({
    label,
    type,
    placeholder,
    className="",
    ...props
}) => {
  return (
    <div>
    <label className="block text-sm mb-1.5">{label}</label>
    <input
      type={ type || "text"}
      placeholder={placeholder}
      className={`w-full px-4 py-2.5 border border-gray-200 rounded-full text-sm placeholder:text-gray-400 ${className ? className: ""}`}
      {...props}
    />
  </div>
  )
}

export default OutlinedInput
