import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbELibrary from '../public/images/works/library.png'
import thumbgoogle from '../public/images/works/google-clone.png'
import thumbmovie from '../public/images/works/MovieSearcher.png'
import thumbTreact from '../public/images/works/treact.png'
import thumbNetflix from '../public/images/works/netflix-clone.png'
import thumbYoutube from '../public/images/works/youtube-clone.png'
import thumbOst from '../public/images/works/ost.png'
import thumbFood from '../public/images/works/food.png'
import thumbWeather from '../public/images/works/weather.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="food" title="foodHotLine" thumbnail={thumbFood}>
            This is a restaurant website made with just HTML, CSS, JAVA, along
            with swiper.js. Feature: About, Order, Dishes, Menu, Reviews, Cart.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="ost" title="OST Website" thumbnail={thumbOst}>
            An e-commerce website that feature logins, carts, shopping methods,
            etc.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="weather"
            title="Weather-Website"
            thumbnail={thumbWeather}
          >
            A website where you can look up the weather by city. I used two API
            for this, one for the geoLocation and the other one is for the
            weather in that location.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="e-library"
            title="E-library"
            thumbnail={thumbELibrary}
          >
            This is e-commerce website for books. It got features books, sorting
            algorithm, and a working cart. (Not Real)
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="movie"
            title="Movie Searcher"
            thumbnail={thumbmovie}
          >
            A website where you can look at a movie descriptions, this was how I
            got practice for using APIs.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="google-clone"
            title="Google-Clone"
            thumbnail={thumbgoogle}
          >
            This is a google-clone that feature a working search engine.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="treact"
            thumbnail={thumbTreact}
            title="Treact-Clone"
          >
            A clone I made from the website Treact.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="netflix-clone"
            title="Netflix-Clone"
            thumbnail={thumbNetflix}
          >
            This is a Netflix-clone that feature a movie APIs.
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem
            id="youtube-clone"
            thumbnail={thumbYoutube}
            title="Youtube-Clone"
          >
            A clone I made from YouTube. A pratice on reusing components.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
