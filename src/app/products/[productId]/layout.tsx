import React from 'react'

export default function ProductLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <h1 className='bg-green-300 inline-block px-3 py-1'>Featured products</h1>
      {children}
    </div>
  )
}
