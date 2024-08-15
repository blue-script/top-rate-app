import Image from 'next/image'
import { Button, HTag } from '@/components'

export default function Home() {
  const a = 1
  return (
    <main>
      <HTag tag={'h1'}>hello</HTag>
      <Button>Узнать подробнее</Button>
      <Button appearance={'ghost'}>button</Button>
    </main>
  )
}
