import React from 'react'
import { notFound } from 'next/navigation'
import { Parisienne } from 'next/font/google'

const productReview = async({params}:
    {params:Promise<{productId:string, reviewId:string}>}) => {
        const {productId, reviewId} = await params
        if(parseInt(reviewId)>1000){
             return notFound()
        }
  return (
    <div>
   <h2>Review {reviewId} for product{productId}</h2>

    </div>
  )
}

export default productReview