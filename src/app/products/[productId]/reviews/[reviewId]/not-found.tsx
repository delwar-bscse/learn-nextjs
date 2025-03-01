"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log("Pathname: ", pathname);
  
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  // console.log("Product ID: ", productId);
  // console.log("Review ID: ", reviewId);

  return (
    <div>
      <h2>Review {reviewId} for product {productId}</h2>
    </div>
  )
}
