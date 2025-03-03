import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = (await params).productId; 
  const title = await new Promise((resolve) =>{
    setTimeout(() => {
      resolve(`iPhone ${id}`)
    }, 300);
  })
  return {
    title: `Product ${title}`
  }
}


export default async function page({ params }: Props) {
  const productId = (await params).productId;

  return (
    <div>
      <h1>Details about product {productId}</h1>
      <Link href="/products">Go Products Page</Link>
    </div>
  )
}
