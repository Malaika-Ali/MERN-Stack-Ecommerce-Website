import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {

    const {categoryName}=useParams()
    console.log(categoryName)
  return (
    <div className='text-green-900 mt-12'     >
      {categoryName} Category
    </div>
  )
}

export default Category
