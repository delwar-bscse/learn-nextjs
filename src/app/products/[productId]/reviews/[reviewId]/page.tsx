import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function Review({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const { productId, reviewId } = await params;

  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(reviewId) > 1000) {
    notFound();
    return null; // Return null to prevent further rendering
  }

  return (
    <div>
      <h1>Review {reviewId} for product {productId}</h1>
    </div>
  );
}