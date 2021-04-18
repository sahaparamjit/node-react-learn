import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(url)
  return (
    <div>
      <h2>{loading ? 'loading...' : <Product products={products} />}</h2>
    </div>
  )
}

const Product = ({ products }) => {
  return (
    <>
      {products.map((pr) => {
        return (
          <article className='product' key={pr.id}>
            <h3>{pr.fields.name}</h3>
            <h3>${pr.fields.price}</h3>
          </article>
        )
      })}
    </>
  )
}

export default Example
