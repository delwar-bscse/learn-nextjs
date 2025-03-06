import Link from 'next/link';

export default function Products() {

  return (
    <div>
      <Link href="/">Go Home</Link>
      <h1>Products List</h1>
      <ul className='flex gap-4'>
        <Link href="/gsp-products/1">Product 1</Link>
        <Link href="/gsp-products/2">Product 2</Link>
        <Link href="/gsp-products/3">Product 3</Link>
      </ul>
    </div>
  )
}
