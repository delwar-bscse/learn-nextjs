import Link from 'next/link'
import React from 'react'

export default function Products() {
  const productId: number = 100;
  return (
    <div>
      <Link href="/">Go Home</Link>
      <h1>Products List</h1>
      <ul >
        <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3" replace>Product 3</Link>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </ul>
    </div>
  )
}
