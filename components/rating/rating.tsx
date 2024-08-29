'use client'

import cn from 'classnames'
import s from './rating.module.css'
import { RatingProps } from '@/components/rating/rating.props'
import { KeyboardEvent, ReactNode, useEffect, useState } from 'react'
import Star from './star.svg'

export const Rating = (props: RatingProps) => {
  const { isEditable = false, rating, setRating, ...rest } = props

  const [ratingArray, setRatingArray] = useState<ReactNode[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: ReactNode, index: number) => {
      return (
        <span
          key={index}
          className={cn(s.star, {
            [s.filled]: index < currentRating,
            [s.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(index + 1)}
        >
          <Star
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
          />
        </span>
      )
    })
    setRatingArray(updateArray)
  }

  const changeDisplay = (num: number) => {
    if (!isEditable) return
    constructRating(num)
  }

  const changeRating = (num: number) => {
    if (!isEditable || !setRating) return
    setRating(num)
  }

  const handleSpace = (num: number, e: KeyboardEvent<SVGElement>) => {
    if (!setRating || e.code != 'Space') return
    setRating(num)
  }

  return <div {...rest}>{ratingArray}</div>
}
