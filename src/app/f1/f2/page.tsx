import Link from 'next/link'
import React from 'react'

export default function F2() {
  return (
    <>
      <div>F2 Page</div>
      <Link className='text-blue-500' href="/f1">Go F1</Link>
      <Link className='text-blue-500' href="/f4">Go F4</Link>
      <Link className='text-blue-500' href="/f5">Go F5</Link>
    </>
  )
}
