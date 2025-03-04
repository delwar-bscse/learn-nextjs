import Link from "next/link";

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional Delay")
    }, 3000);
  });
  
  return (
    <div className="space-y-4">
      <div className="text-3xl font-semibold">Blog Page</div>
      <Link className=" bg-amber-300 rounded-sm px-3 py-1" href="/">
        Go Home
      </Link>
    </div>
  )
}
