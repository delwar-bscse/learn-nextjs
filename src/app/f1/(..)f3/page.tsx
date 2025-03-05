import Link from "next/link";


export default function F3() {
  return (
    <>
      <div>(..) Intercepted F3 Page</div>
      <Link className='text-blue-500' href="/f1">Go F1</Link>
    </>
  )
}
