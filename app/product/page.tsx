import Link from 'next/link'
import React from 'react'

export const metadata ={
  title:'Next.js course',
  description:'Next tutorial with codevolution'
}

const product = () => {
  return (
    <div>product
      <Link href={'/'}>
      Home
      </Link>
    </div>
  )
}

export default product