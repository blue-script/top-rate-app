import { getPage } from '@/api/page'
import { getProduct } from '@/api/proudct'
import { notFound } from 'next/navigation'
import { getMenu } from '@/api/menu'

export async function generateStaticParams() {
  const menu = await getMenu(0)
  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })))
}

export default async function Course({ params }: { params: { alias: string } }) {
  const page = await getPage(params.alias)

  if (!page) notFound()

  const products = await getProduct(page.category)

  return <div>{products?.length}</div>
}
