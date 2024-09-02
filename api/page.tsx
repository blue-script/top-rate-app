import { TopPageModel } from '@/interfaces/page.interface'
import { notFound } from 'next/navigation'

export async function getPage(alias: string): Promise<TopPageModel | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`, {
    next: { revalidate: 10 }
  })

  if (!res.ok) {
    return null
  }
  return res.json()
}
