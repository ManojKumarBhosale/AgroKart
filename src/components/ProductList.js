import React from 'react'
import Product from './Product'
const ProductList = () => {
  const products = [1,2,3,4,5,6,7]
  return (
    <div style={{}}> 
      {
        products.map(product => <Product key={product} product={product} />)
      }
    </div>
  )
}

export default ProductList