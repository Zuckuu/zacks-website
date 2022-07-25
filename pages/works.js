import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbELibrary from '../public/images/works/library.png'
import thumbgoogle from '../public/images/works/google-clone.png'
import thumbmovie from '../public/images/works/MovieSearcher.png'
import thumbTreact from '../public/images/works/treact.png'
import thumbNetflix from '../public/images/works/netflix-clone.png'
import thumbYoutube from '../public/images/works/youtube-clone.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="e-library"
            title="E-library"
            thumbnail={thumbELibrary}
          >
            This is e-commerce website for books. It got features books, sorting
            algorithm, and a working cart. (Not Real)
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="movie"
            title="Movie Searcher"
            thumbnail={thumbmovie}
          >
            A website where you can look at a movie descriptions, this was how I
            got practice for using APIs.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="google-clone"
            title="Google-Clone"
            thumbnail={thumbgoogle}
          >
            This is a google-clone that feature a working search engine.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="treact"
            thumbnail={thumbTreact}
            title="Treact-Clone"
          >
            A clone I made from the website Treact.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="netflix-clone"
            title="Netflix-Clone"
            thumbnail={thumbNetflix}
          >
            This is a Netflix-clone that feature a movie APIs.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="youtube-clone"
            thumbnail={thumbYoutube}
            title="Youtube-Clone"
          >
            A clone I made from YouTube.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
