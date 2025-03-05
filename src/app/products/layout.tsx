import Link from 'next/link'

export default function template({children}:{children:React.ReactNode}) {
  const productId: number = 100;

  return (
    <div>
      {children}
      <ul className='flex gap-4 border-t-2 border-t-gray-400 pt-2 mt-2'>
        <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </ul>
    </div>
  )
}
