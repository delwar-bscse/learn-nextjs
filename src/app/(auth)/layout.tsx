"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      <div>
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
