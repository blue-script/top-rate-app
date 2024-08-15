import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export type ButtonProps = {
  appearance?: 'primary' | 'ghost'
  children: ReactNode
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
