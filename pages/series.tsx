import { useSelector } from 'react-redux'

import { Flex, Heading } from '@chakra-ui/react'

import Animation from '../components/animation'
import MovieGrid from '../components/movies/grid'

import { MovieList } from '../types/movies'

const SeriesPage = () => {
  const movies = useSelector<MovieList, MovieList['entries']>(
    state => state.entries
  )

  return (
    <>
      <Flex gap={3} direction="column">
        <Heading variant="section-title-sm">Series</Heading>
        <Animation>
          <MovieGrid filter="series" movies={movies} />
        </Animation>
      </Flex>
    </>
  )
}

export default SeriesPage
