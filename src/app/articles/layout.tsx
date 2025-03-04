import Link from 'next/link'
import React from 'react'

export default function page({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-10'>
      <div className='flex py-4 gap-2'>
        <Link className='border py-1 px-3 rounded-sm' href="/articles/breaking-news-123?lang=en">Breaking News 123</Link>
        <Link className='border py-1 px-3 rounded-sm' href="/articles/breaking-news-124?lang=en">Breaking News 124</Link>
      </div>
      {children}
    </div>
  )
}
