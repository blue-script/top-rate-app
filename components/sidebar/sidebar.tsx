import { SidebarProps } from '@/components/sidebar/sidebar.props'
import { Menu } from '@/app/components/menu'

export const Sidebar = (props: SidebarProps) => {
  return (
    <aside {...props}>
      <Menu />
    </aside>
  )
}
