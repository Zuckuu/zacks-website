import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
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
        A clone I made from the website Treact. This was an individual project.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://zuckuu.github.io/TreactRemake/" target="_blank">
            https://zuckuu.github.io/TreactRemake/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>What I Learned</Meta>
          <span>
            I learned how to use the inspect feature to debug my problems
          </span>
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
