import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Netflix Clone">
    <Container>
      <Title>
        Netflix Clone <Badge>2022</Badge>
      </Title>
      <P>This is a Netflix-clone that feature a movie APIs.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Html, Css, Java</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <span>Getting pratice with my APIs!!</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Netflix-Clone.png" alt="Netflix Clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
