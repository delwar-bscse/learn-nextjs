import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-center gap-8 py-2">
        <Link href="/">Home</Link>
        <Link href="/articles">Article</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/photo-feed">Galary</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </div>
  )
}
