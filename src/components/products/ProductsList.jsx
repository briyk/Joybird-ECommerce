import React from 'react'
import { Container } from 'reactstrap'
import ProductCard from './ProductCard'
import "./products.css";


const ProductsList = ({ data }) => {
  // console.log(data)
  return (
    <>
      {
        data?.map(item => (
          <ProductCard item={item} key={item.id}/>
        ))
      }

    </>
  )
}

export default ProductsList