"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Place your order');
    router.push('/');
  }

  return (
    <>
      <div>Order Product</div>
      <button className="cursor-pointer" onClick={handleClick}>Please Order</button>
    </>
  )
}
