import React from 'react'
import { ParagraphProps } from '@/components/paragraph/paragraph.props'
import cn from 'classnames'
import s from './paragraph.module.css'

export const Paragraph = (props: ParagraphProps) => {
  const { size = 'medium', children, className, ...rest } = props
  const commonClassName = cn(s.paragraph, className, s[size])

  return (
    <p className={commonClassName} {...rest}>
      {children}
    </p>
  )
}
