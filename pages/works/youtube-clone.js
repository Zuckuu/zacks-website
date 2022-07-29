import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="YouTube Clone">
    <Container>
      <Title>
        YouTube Clone <Badge>2022</Badge>
      </Title>
      <P>
        A clone I made from YouTube. A pratice on reusing components. This was
        tutorial on youtube.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript, React</span>
        </ListItem>
        <ListItem>
          <Meta>What I Learned</Meta>
          <span>Cat Videos</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/youtube-clone.png" alt="YouTube Clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
