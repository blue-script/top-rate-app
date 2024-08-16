import s from './button.module.css'
import { ButtonProps } from '@/components/button/button.props'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Button = (props: ButtonProps) => {
  const {
    appearance = 'primary',
    className,
    children,
    arrow = 'none',
    ...rest
  } = props
  const commonClassName = cn(
    s.button,
    { [s.primary]: appearance === 'primary' },
    { [s.ghost]: appearance === 'ghost' },
    { className: className }
  )

  const arrowClassName = cn(s.arrow, { [s.down]: arrow === 'down' })

  return (
    <button className={commonClassName} {...rest}>
      {children}
      {arrow !== 'none' && <ArrowIcon className={arrowClassName} />}
    </button>
  )
}
