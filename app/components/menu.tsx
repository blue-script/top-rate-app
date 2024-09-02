import { getMenu } from '@/api/menu'

export async function Menu() {
  const menu = await getMenu(0)

  return (
    <div>
      <ul>{menu?.map((item) => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}</ul>
    </div>
  )
}
