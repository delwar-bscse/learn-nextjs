'use client'

import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-2xl font-bold text-blue-900'>Count: {count}</h1>
      <div className='flex items-center gap-3'>
        <button className='px-3 py-1 border rounded-sm ' onClick={() => setCount(count + 1)}>+</button>
        <button className='px-3 py-1 border rounded-sm ' onClick={() => setCount(0)}>0</button>
        <button className='px-3 py-1 border rounded-sm ' onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}

export default Counter