import { Metadata } from 'next'
import React from 'react'

type paramProps ={
  params:{ productId:string}
}

export const generatedDynamciMetaData = async ({params}:paramProps):Promise<Metadata>=>{
  const {productId} =  params

 const title = await  new Promise<string>((resolve)=>{
  setTimeout(()=>{
  resolve(`iphone ${productId}`)
  },100)
 
 })
      return {
    title:`product  ${title}`
  }

}
const  productDetails = async ({params}:paramProps) => {
    const {productId } = params
  return (
    <div>
            this is the product Detail of {productId}
    </div>
  )
}

export default productDetails