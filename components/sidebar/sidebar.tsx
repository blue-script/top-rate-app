import s from './sidebar.module.css'
import { Menu } from '@/app/components/menu/menu'
import { createContext, useState } from 'react'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { SidebarProps } from '@/components/sidebar/sidebar.props'

export function Sidebar(props: SidebarProps) {
  return (
    <div {...props}>
      <Menu />
    </div>
  )
}
