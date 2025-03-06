import Product from '@/components/Product'
import Reviews from '@/components/Reviews'
import React, { Suspense } from 'react'

export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<div>Loading product...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  )
}
