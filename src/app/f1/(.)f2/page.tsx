import Link from "next/link";


export default function interceptedF2() {
  return (
    <>
      <h1>(.) Intercepted F2 Page</h1>
      <Link className='text-blue-500' href="/f1">Go F1</Link>
    </>
  )
}
