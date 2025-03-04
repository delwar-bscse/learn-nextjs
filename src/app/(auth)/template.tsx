"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');
  const pathname = usePathname();

  return (
    <div>
      <div>
        <div className='py-4'>
          <input className='bg-gray-200 rounded-md ' value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(`${link.href}`) && link.href !== '/');
          return <Link key={link.href} href={link.href} className={isActive ? 'font-bold text-blue-700' : ''}>
            {link.name}
          </Link>
        })}
      </div>
      <main>{children}</main>
    </div>
  )
}
