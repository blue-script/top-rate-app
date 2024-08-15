import s from './button.module.css'
import { ButtonProps } from '@/components/button/button.props'
import cn from 'classnames'

export const Button = (props: ButtonProps) => {
  const { appearance = 'primary', className, children, ...rest } = props
  const commonClass = cn(
    s.button,
    { [s.primary]: appearance === 'primary' },
    { [s.ghost]: appearance === 'ghost' },
    { className: className }
  )

  return (
    <button className={commonClass} {...rest}>
      {children}
    </button>
  )
}
