'use client'
import { usePathname } from 'next/navigation'

const NotFound = ()=> {
  const pathname = usePathname()
    const reviewId = pathname.split('/')[2]
    const productId = pathname.split('/')[4]
  return (
    <div>
        Review {reviewId}  for product {productId}  Not Found

    </div>
  )
}

export default NotFound