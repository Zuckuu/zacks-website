import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="E-library">
    <Container>
      <Title>
        E-library <Badge>2022-</Badge>
      </Title>
      <P>
        This is e-commerce website for books. It got features books, sorting
        algorithm, and a working cart. (Not Real) I learn how to do this from a
        course I took to learn how to code.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://zuckuu.github.io/e-library-react/"
            target="_blank"
          >
            https://zuckuu.github.io/e-library-react/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css, Java, React</span>
        </ListItem>
        <ListItem>
          <Meta>What I learned</Meta>
          <span>
            In this project, I learned how to use react framework along with
            sorting java codes.
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/library.png" alt="E-library" />
      <WorkImage src="/images/works/library-01.png" alt="E-library" />
      <WorkImage src="/images/works/library-02.png" alt="E-library" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
