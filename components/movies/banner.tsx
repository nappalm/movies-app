import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { chain } from 'lodash'
import { FC, useEffect, useState } from 'react'

import MovieCard from './card'

const BannerStyle = styled(Box)`
  width: 100%;
  .banner-image {
    width: 20rem;
    height: 100%;
  }
`

import { MovieEntries, MovieItem } from '../../types/movies'
import Animation from '../animation'
import Loading from './_loading'

interface BannerBaseProps {
  movies: MovieEntries
}

const Banner: FC<BannerBaseProps> = props => {
  const [preview, setPreview] = useState<MovieItem>(undefined)

  useEffect(() => {
    const sampleItem = chain(props.movies)
      .filter(movie => movie.releaseYear >= 2016)
      .sample()
      .value()

    setPreview(sampleItem)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (preview === undefined) return <Loading />
  return (
    <BannerStyle>
      <Grid templateColumns="20rem 1fr" gap={10}>
        <Animation>
          <MovieCard shadow image={preview.images['Poster Art'].url} />
        </Animation>
        <Animation>
          <Flex direction="column" gap={1}>
            <Heading variant="section-title" as="h1" size="lg">
              {preview.title}
            </Heading>
            <Text>Año: {preview.releaseYear}</Text>
            <Text>Descripción:</Text>
            <Text w="container.sm">{preview.description}</Text>
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
