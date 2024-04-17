/* eslint-disable react/prop-types */
import React from 'react'

const Product = ({ product }) => {
  return (
    <div>
      <div className=' bg-white border border-gray-300 p-4 flex flex-col space-y-2'>
        <img
          src={product.image}
          alt={product.productName}
          className='w-48 h-48 bg-cover object-fill rounded-2xl flex mx-auto'
        />
        <h1 className='text-lg'>{product.productName}</h1>
        <div className='flex flex-row justify-between items-center'>
          <span>{product.price}</span>
          <span>{product.brand}</span>
        </div>
        <button className='p-2 bg-lightSeaGreen rounded-lg text-white'>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Product
