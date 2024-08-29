import React from 'react'
import { TagProps } from '@/components/tag/tag.props'
import s from './tag.module.css'
import cn from 'classnames'

export const Tag = (props: TagProps) => {
  const { size = 's', color = 'ghost', className, children, href, ...rest } = props
  const commonClassName = cn(s.tag, s[size], s[color], className)

  return (
    <div className={commonClassName} {...rest}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}
