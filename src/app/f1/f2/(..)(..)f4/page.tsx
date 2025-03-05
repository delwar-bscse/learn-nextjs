import Link from "next/link";


export default function F4() {
  return (
    <>
      <div>(..)(..) Intercepted F4 Page</div>
      <Link className='text-blue-500' href="/f1">Go F1</Link>
    </>
  )
}
