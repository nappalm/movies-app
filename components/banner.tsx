import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FC } from 'react'
import MovieCard, { MovieCardProps } from './movies/card'

const BannerStyle = styled(Box)`
  width: 100%;
  .banner-image {
    width: 20rem;
    height: 100%;
  }
`

import Animation from './animation'

const Banner: FC<MovieCardProps> = props => {
  return (
    <BannerStyle image={props.image}>
      <Grid templateColumns="20rem 1fr" gap={10}>
        <Animation>
          <MovieCard shadow image={props.image} />
        </Animation>
        <Animation>
          <Flex direction="column" gap={1}>
            <Heading variant="section-title" as="h1" size="lg">
              {props.title}
            </Heading>
            <Flex></Flex>
            <Text>Año: {props.year}</Text>
            <Text>Descripción:</Text>
            <Text w="container.sm">{props.description}</Text>
            <Flex mt={5} gap={2}>
              <Button
                variant="ghost"
                size="lg"
                rightIcon={<ArrowForwardIcon />}
              >
                Ver ahora
              </Button>
            </Flex>
          </Flex>
        </Animation>
      </Grid>
    </BannerStyle>
  )
}

export default Banner
