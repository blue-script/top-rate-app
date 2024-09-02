import { ProductModel } from '@/interfaces/product.interface'
import { notFound } from 'next/navigation'

export async function getProduct(category: string): Promise<ProductModel[] | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
    method: 'POST',
    body: JSON.stringify({
      category: category,
      limit: 10
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 10 }
  })

  if (!res.ok) {
    notFound()
  }
  return res.json()
}
