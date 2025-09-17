'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const OrderProduct = () => {
    const router = useRouter()
    const handleClick =()=>{
          router.push('/')
    }
  return (
    <div>OrderProduct
        <button className='bg-red-500' onClick={handleClick}>
         Place order
        </button>

    </div>
  )
}

export default OrderProduct