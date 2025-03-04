"use client";

import Link from 'next/link'
import React, { use } from 'react'

export default function NewsArticle({ params, searchParams }: {
  params: Promise<{ articleId: string }>,
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>
}) {
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  return (
    <div>
      <h1>News Article <span className='font-bold text-green-600'>{articleId}</span></h1>
      <p>Reading in <span className='font-bold text-blue-500'>{lang}</span></p>
      <div className='flex gap-3 p-5'>
        <Link className='border-b border-b-gray-400' href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link className='border-b border-b-gray-400' href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link className='border-b border-b-gray-400' href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  )
}
