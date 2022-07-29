import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Welcome, I&apos;m a Web developer based in Houston, TX!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Zack Le
          </Heading>
          <p>
            {' '}
            <strong>Frontend Developer</strong> ( Web Developer / Designer )
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/zack.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          My name is Thang Le, but I prefer the name, Zack Le. I am young
          frontend developer looking to gain more experience in web building. I
          can use Html, CSS, and Java with frameworks like React or Next.js.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Ho Chi Minh, Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          Moved to America.
        </BioSection>
        <BioSection>
          <BioYear>2018-2021</BioYear>
          Worked at many local jobs like: waiter, sale rep, lifeguard, tennis
          coach, brand-stores.
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working as a tennis coach while attending school. Also looking for
          Frontend Development jobs.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Tennis, Anime, Gundam, Model-kits, Legos
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Zuckuu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Zuckuu
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/thang-le-519ab6209/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Linkedin/Zack-Le
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/cheekyzacken/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @cheekyzacken
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mini-Projects
            </Button>
          </NextLink>
        </Box>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Special Thanks
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.flaticon.com/authors/smashicons"
                target="_blank"
              >
                <Button variant="ghost" colorScheme="teal">
                  @smashicons
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.craftz.dog/" target="_blank">
                <Button variant="ghost" colorScheme="teal">
                  @Takuya Matsuyama
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://sketchfab.com/3d-models/anya-forger-spy-x-family-470b41ca5e074f1493a26940fa371ec3"
                target="_blank"
              >
                <Button variant="ghost" colorScheme="teal">
                  @Hasksoft
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
