import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Treact-Clone">
    <Container>
      <Title>
        Treact-Clone <Badge>2022</Badge>
      </Title>
      <P>
      A clone I made from the website Treact.
      </P>    

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <span>First Cloning project!!</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/treact.png" alt="treact" />
      <WorkImage src="/images/works/treact-01.png" alt="treact" />
      <WorkImage src="/images/works/treact-02.png" alt="treact" />
      <WorkImage src="/images/works/treact-03.png" alt="treact" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
