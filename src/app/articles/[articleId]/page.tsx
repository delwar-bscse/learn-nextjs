import Link from 'next/link'
import React from 'react'

export default function NewsArticle() {
  return (
    <div>
      <h1>News Article id</h1>
      <p>Reading in language</p>
      <div>
        <Link href="/articles/id?lang=en">English</Link>
        <Link href="/articles/id?lang=es">Spanish</Link>
        <Link href="/articles/id?lang=fr">French</Link>
      </div>
    </div>
  )
}
