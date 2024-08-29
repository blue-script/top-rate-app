import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TagProps = {
  size?: 's' | 'm'
  color?: 'ghost' | 'green' | 'red' | 'primary' | 'grey'
  href?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
