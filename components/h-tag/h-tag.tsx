import { HTagProps } from './h-tag.props'
import s from './h-tag.module.css'

export const HTag = (props: HTagProps) => {
  switch (props.tag) {
    case 'h1':
      return <h1 className={s.h1}>{props.children}</h1>
    case 'h2':
      return <h2>{props.children}</h2>
    case 'h3':
      return <h3>{props.children}</h3>
    default:
      return <>{props.children}</>
  }
}
