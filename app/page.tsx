import Image from 'next/image'
import { Button, HTag, Paragraph } from '@/components'

export default function Home() {
  const a = 1
  return (
    <main>
      <HTag tag={'h1'}>hello</HTag>
      <Button>Узнать подробнее</Button>
      <Button arrow={'right'}>Узнать подробнее</Button>
      <Button arrow={'down'} appearance={'ghost'}>
        button
      </Button>
      <Paragraph>some</Paragraph>
      <Paragraph size={'small'}>some</Paragraph>
      <Paragraph size={'large'}>some</Paragraph>
    </main>
  )
}
