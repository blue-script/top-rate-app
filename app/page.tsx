import { Button, HTag, Paragraph, Rating, Tag } from '@/components'
import { Menu } from '@/app/components/menu'

export default async function Home() {
  // const [rating, setRating] = useState<number>(4)

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
      <Tag size={'m'} color={'green'}>
        green
      </Tag>
      <Tag>ghost</Tag>
      <Tag size={'m'} color={'red'}>
        red
      </Tag>
      <Tag size={'m'} color={'grey'}>
        grey
      </Tag>
      <Tag size={'s'} color={'primary'}>
        primary
      </Tag>
      <Tag href={'www.google.com'} size={'m'}>
        primary
      </Tag>
      <Rating rating={4} />
      {/*<Rating rating={rating} isEditable={true} setRating={setRating} />*/}
      <Menu />
    </main>
  )
}
