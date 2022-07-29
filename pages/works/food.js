import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="foodHotLine">
    <Container>
      <Title>
        foodHotLine <Badge>2022</Badge>
      </Title>
      <P>
        This is a restaurant website made with just HTML, CSS, JAVA, along with
        swiper.js. Feature: About, Order, Dishes, Menu, Reviews, Cart.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css, Java</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <span>Restaurant Website!!!</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/food.png" alt="food" />
      <WorkImage src="/images/works/food-01.png" alt="food" />
      <WorkImage src="/images/works/food-02.png" alt="food" />
      <WorkImage src="/images/works/food-03.png" alt="food" />
      <WorkImage src="/images/works/food-04.png" alt="food" />
      <WorkImage src="/images/works/food-05.png" alt="food" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
