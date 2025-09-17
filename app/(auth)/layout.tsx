'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLink =[
  {name:'Login', href:'/login'},
  {name:'Register', href:'/register'},
  {name:'Forgot password', href:'/forgot-password'},
]
const AuthLayout = ({children}:{children:React.ReactNode}) => {
  const pathname = usePathname()
  return (
    <div>
      <div>
        {
          navLink.map((link)=>{
            const isActive = pathname === link.href|| pathname.startsWith(link.href) && link.href !== '/' 
            return(
            <Link key={link.name} className={`${isActive?'bg-blue-500':'text-black font-bold'}`} href={link.href} > 
                {link.name}
            </Link> 
           
            )
          })
        }
      </div>
        {children}
        AuthLayout
        </div>
  )
}

export default AuthLayout