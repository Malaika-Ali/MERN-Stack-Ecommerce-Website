import React from 'react'

const Input = ({type, label, id, value, setForm}) => {
   
  return (
    <div className='flex flex-col justify-center'>
          <label htmlFor={id}
              className='dark:text-white'>{label}</label>
          <input type={type}
              id={id}
              value={value}
              onChange={(e) => setForm(prev=>({...prev, [id]: e.target.value}))}
              className="w-full p-2 border rounded-lg mb-4 dark:bg-[#333] dark:text-white focus:border-gray-500" />
    </div>
  )
}

export default Input
