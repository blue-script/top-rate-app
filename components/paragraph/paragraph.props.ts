import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ParagraphProps = {
  size?: 'small' | 'medium' | 'large'
} & DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>
