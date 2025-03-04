"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log("Pathname: ", pathname);

  const segments = pathname.split('/');
  const productId = segments[2] || "unknown";
  const reviewId = segments[4] || "unknown";

  return (
    <div>
      <h2>Review {reviewId} not found for product {productId}</h2>
    </div>
  );
}
