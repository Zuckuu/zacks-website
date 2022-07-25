import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Google-Clone">
    <Container>
      <Title>
        Google-Clone <Badge>2022</Badge>
      </Title>
      <P>This is a google-clone that feature a working search engine.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://zuckuu.github.io/google-clone/" target="_blank">
            https://zuckuu.github.io/google-clone/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span> HTML, CSS, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <span>A pratice on how to improve my skill on css and html.</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/google-clone.png" alt="google-clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
