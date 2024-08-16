import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export type ButtonProps = {
  appearance?: 'primary' | 'ghost'
  children: ReactNode
  arrow?: 'none' | 'right' | 'down'
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
