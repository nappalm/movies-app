import { useSelector } from 'react-redux'
import { Heading, Flex } from '@chakra-ui/react'

import Animation from '../components/animation'
import MovieGrid from '../components/movies/grid'
import { MovieList } from '../types/movies'

const MoviesPage = () => {
  const movies = useSelector<MovieList, MovieList['entries']>(
    state => state.entries
  )

  return (
    <>
      <Flex gap={3} direction="column">
        <Heading variant="section-title-sm">Peliculas</Heading>
        <Animation>
          <MovieGrid filter="movie" movies={movies} />
        </Animation>
      </Flex>
    </>
  )
}

export default MoviesPage
