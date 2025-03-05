import Link from 'next/link'
import React from 'react'

export default function F1() {
  return (
    <div>
      <h1>F1 Page</h1>
      <div className='flex flex-col gap-1 my-3'>
        <Link className='text-blue-500' href="/f1/f2">Go F2</Link>
        <Link className='text-blue-500' href="/f3">Go F3</Link>
      </div>
    </div>
  )
}