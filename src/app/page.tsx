import Link from "next/link";



export default function Home() {
  return (
    <>
      <div className="text-3xl font-semibold">Home Page</div>
      <div className="flex items-center gap-5">
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      </div>
    </>
  )
}
