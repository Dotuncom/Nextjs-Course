import { promises } from 'dns'
import React from 'react'

type paramProps ={
  params: Promise<{productId:string}>
}
const  productDetails = async ({params}:paramProps) => {
    const productId = (await params).productId
  return (
    <div>
            this is the product Detail of {productId}
    </div>
  )
}

export default productDetails