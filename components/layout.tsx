import Head from 'next/head'
import NavBar from './navbar'
import { Box, Container } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type routerProps = {
  asPath: string
}

type MainProps = {
  children?: ReactNode
  router: routerProps
}

const Main: FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Popcorn</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="8xl" pt={20}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
