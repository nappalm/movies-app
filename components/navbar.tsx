import { Box, Container, Flex, Link, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC, ReactNode } from 'react'
import Logo from './logo'

interface LinkItemProps {
  href: string
  path: string
  target?: string
  children: ReactNode
}

const LinkItem: FC<LinkItemProps> = ({
  href,
  path,
  target,
  children,
  ...props
}) => {
  const active = path === href
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? '#000' : undefined}
        color={active ? 'white' : '#000'}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

interface NavBarProps {
  path: string
}

const Navbar: FC<NavBarProps> = props => {
  const { path } = props

  return (
    <Box
      borderBottom="0.180rem solid #000"
      bg="white"
      position="fixed"
      as="nav"
      w="100%"
      zIndex={1}
    >
      <Container
        display="flex"
        h="3.5rem"
        maxW="8xl"
        flexWrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/movies" path={path}>
            Peliculas
          </LinkItem>
          <LinkItem href="/series" path={path}>
            Series
          </LinkItem>
        </Stack>
        <Stack alignItems="center" direction={{ base: 'column', md: 'row' }}>
          <LinkItem href="#" path={path}>
            Iniciar Sesión
          </LinkItem>
          <LinkItem href="#" path={path}>
            Registrarme
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
