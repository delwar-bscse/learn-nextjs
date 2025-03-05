import React from 'react'

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductLayout({children}:{children:React.ReactNode}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading product");
  }
  return (
    <div>
      <h1 className='bg-green-300 inline-block px-3 py-1'>Featured products</h1>
      {children}
    </div>
  )
}
