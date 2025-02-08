import React, {useId} from 'react'

const OutlinedInput = ({
    label,
    type='text',
    placeholder,
    className="",
    ...props
}, ref) => {
  const id=useId()
  return (
    <div>
    <label className="block text-sm mb-1.5 px-2">{label}</label>
    <input
      type={ type || "text"}
      placeholder={placeholder}
      className={`w-full px-4 py-2.5 border border-gray-200 rounded-full text-sm placeholder:text-gray-400 ${className ? className: ""} transition-all duration-400 ease-linear`}
      {...props}
      id={id}
      ref={ref}
    />
  </div>
  )
}

export default React.forwardRef(OutlinedInput)
