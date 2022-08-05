import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="E-weather">
    <Container>
      <Title>
        Weather-Website <Badge>2022-</Badge>
      </Title>
      <P>
        A website where you can look up the weather by city. I used two API for
        this, one for the geoLocation and the other one is for the weather in
        that location.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://weather-website-zack-le.netlify.app/"
            target="_blank"
          >
            https://weather-website-zack-le.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, CSS, Java, React</span>
        </ListItem>
        <ListItem>
          <Meta>What I learned</Meta>
          <span>
            In this project, I practiced using two API along with Accordion
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/weather.png" alt="weather" />
      <WorkImage src="/images/works/weather-01.png" alt="weather" />
      <WorkImage src="/images/works/weather-02.png" alt="weather" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
