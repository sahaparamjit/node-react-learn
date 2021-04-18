import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  console.log(image, name, price)
  const url = image && image.url
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h3>{name}</h3>
      <h3>${price || 3.99}</h3>
    </article>
  )
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
}

export default Product
