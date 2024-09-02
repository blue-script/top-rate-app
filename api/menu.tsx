import { MenuItem } from '@/interfaces/menu.interface'
import { notFound } from 'next/navigation'

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 10 }
  })

  return res.json()
}
