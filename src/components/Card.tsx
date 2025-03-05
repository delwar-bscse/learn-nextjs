import React from 'react'

export default function Card({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='p-10 m-10 shadow-sm border border-[#dddddd] flex justify-center items-center'>{children}</div>
  )
}
