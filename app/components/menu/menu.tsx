'use client'

import { getMenu } from '@/api/menu'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface'
import s from './menu.module.css'
import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import BooksIcon from './icons/books.svg'
import ProductIcon from './icons/products.svg'
import cn from 'classnames'
import { useEffect, useLayoutEffect, useState } from 'react'
import Link from 'next/link'

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <ProductIcon />, id: TopLevelCategory.Products }
]

export function Menu() {
  const [categoryMenu, setCategoryMenu] = useState<TopLevelCategory>(TopLevelCategory.Courses)
  const [menu, setMenu] = useState<MenuItem[] | null>(null)

  useEffect(() => {
    async function fetchMenu() {
      const dataForMenu = await getMenu(categoryMenu)

      setMenu(dataForMenu)
    }
    fetchMenu()
  }, [categoryMenu])

  const checkMenu = (id: string) => {}

  const buildFirstLevel = () => {
    return (
      <ul className={s.first_level}>
        {firstLevelMenu?.map((menu) => (
          <li key={menu.id}>
            <Link
              href={`/${menu.route}`}
              className={cn(s.first_level__item, { [s.first_level__item_active]: menu.id === categoryMenu })}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </Link>
            {menu.id === categoryMenu && buildSecondLevel(menu)}
          </li>
        ))}
      </ul>
    )
  }

  const buildSecondLevel = (menuRoute: FirstLevelMenuItem) => {
    return (
      <ul className={s.second_level}>
        {menu?.map((menuItem) => (
          <li key={menuItem._id.secondCategory} className={s.second_level__item}>
            <button className={s.second_level__item_button}>{menuItem._id.secondCategory}</button>
            <div
              className={cn(s.second_level__block, {
                [s.second_level__block_open]: menuItem.isOpened
              })}
            >
              {buildThirdLevel(menuItem.pages, menuRoute.route)}
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <ul className={s.third_level}>
        {pages?.map((page) => (
          <li
            key={page._id}
            className={cn(s.third_level__item, {
              [s.third_level__item_active]: false
            })}
          >
            <Link href={`/${route}/${page.alias}`}>{page.category}</Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      {buildFirstLevel()}
      {/*<ul>*/}
      {/*  {menu?.map((item) => (*/}
      {/*    <li key={item._id.secondCategory} onClick={() => checkMenu(item._id.secondCategory)}>*/}
      {/*      {item._id.secondCategory}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  )
}
