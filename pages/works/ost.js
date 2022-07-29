import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="OST">
    <Container>
      <Title>
        OST <Badge>2022-</Badge>
      </Title>
      <P>
      An e-commerce website that feature logins, carts, shopping methods, etc.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css, Java, React</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <span>self-made e-commerce!</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ost.png" alt="ost" />
      <WorkImage src="/images/works/ost-01.png" alt="ost" />
      <WorkImage src="/images/works/ost-02.png" alt="ost" />
      <WorkImage src="/images/works/ost-03.png" alt="ost" />
      <WorkImage src="/images/works/ost-04.png" alt="ost" />
      <WorkImage src="/images/works/ost-05.png" alt="ost" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
