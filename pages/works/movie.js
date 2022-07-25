import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Movie Searcher">
    <Container>
      <Title>
        Movie Searcher <Badge>2022</Badge>
      </Title>
      <P>
        A website where you can look at a movie descriptions, this was how I got
        practice for using APIs.
      </P>
      <List ml={4} my={4}>
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
          <span>Getting pratice with my APIs!!</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/MovieSearcher.png" alt="MovieSearcher" />
      <WorkImage src="/images/works/MovieSearcher-01.png" alt="MovieSearcher" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
