import { FooterProps } from '@/components/footer/footer.props'
import cn from 'classnames'
import s from './footer.module.css'
import { format } from 'date-fns'

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props
  const footerClass = cn(s.footer, className)

  return (
    <footer {...rest} className={footerClass}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href={'#'} target="_blank">
        Пользовательское соглашение
      </a>
      <a href={'#'} target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  )
}
