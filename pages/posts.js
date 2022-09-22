import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbTTT from '../public/images/contents/tictactoe.png'
import thumbClock from '../public/images/contents/clock.png'
import thumbStopWatch from '../public/images/contents/stopwatch.png'
import thumbSnake from '../public/images/contents/snake.png'
import thumbMc from '../public/images/contents/mc-calc.png'
import thumb2048 from '../public/images/contents/g2048-01.png'

const Posts = () => (
  <Layout title="Mini-Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Mini-Projects
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Tic-Tac-Toe"
            thumbnail={thumbTTT}
            href="https://zuckuu.github.io/TicTacToe/"
            targer="_blank"
          />
          <GridItem
            title="Clock"
            thumbnail={thumbClock}
            href="https://zuckuu.github.io/Clock/"
            targer="_blank"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Stop-watch"
            thumbnail={thumbStopWatch}
            href="https://zuckuu.github.io/Stopwatch/"
            targer="_blank"
          />
           <GridItem
            title="Snake-game"
            thumbnail={thumbSnake}
            href="https://snake-game-vv4x.vercel.app/"
            targer="_blank"
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.5}>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Minecraft Stack Calculator"
            thumbnail={thumbMc}
            href="https://zuckuu.github.io/MC-StackCalc/"
            targer="_blank"
          />
           <GridItem
            title="2048"
            thumbnail={thumb2048}
            href="https://zuckuu.github.io/g2048/"
            targer="_blank"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
