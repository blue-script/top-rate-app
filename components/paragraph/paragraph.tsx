import { ParagraphProps } from '@/components/paragraph/paragraph.props'
import cn from 'classnames'
import s from './paragraph.module.css'

export const Paragraph = (props: ParagraphProps) => {
  const { size = 'medium', children, className, ...rest } = props
  const commonClassName = cn(s.paragraph, s[size], className)

  return (
    <p className={commonClassName} {...rest}>
      {children}
    </p>
  )
}
