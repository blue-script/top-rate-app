import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type RatingProps = {
  isEditable?: boolean
  rating: number
  setRating?: (value: number) => void
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
