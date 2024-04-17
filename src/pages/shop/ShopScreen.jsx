import React, { useState } from 'react'
import data from '../../Products.json'
import Product from '../../components/Product'

const ShopScreen = () => {
  const [products, setProducts] = useState(data)
  console.log(data)

  return (
    <div className='font-poppins mx-auto max-w-screen-xl px-4 py-6 sm:px-10 lg:px-8'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ShopScreen
