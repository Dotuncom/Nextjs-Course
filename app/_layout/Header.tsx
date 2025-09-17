"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLink = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "profile", href: "/Profile" },
    { name: "Register", href: "register" },

    { name: "Login", href: "/login" },

];
const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="h-20 w-full   py-4 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="  flex items-center justify-center text-sky-400 ">
            <h2 className="text-4xl font-bold"> Next.js</h2>
          </div>

          <div className="text-2xl hidden lg:flex items-center  space-x-4 text-white">
            {navLink.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <div className="hidden lg:block " key={link.name}>
                  <Link href={link.href}> {link.name}</Link>
                  {isActive && (
                    <div className="relative border-b flex items-center justify-center border-b-white ">
                      <div className="absolute  top-full  -translate-y-1/2 left-1/2 border-l-8 border-r-8 border-b-9 border-l-transparent border-r-transparent border-b-sky-400"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <h1 className='text-4xl fon-bold'> (\+\)</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
