import { useSelector } from 'react-redux'
import { Movies } from '../redux/reducer'

import { Flex, Heading } from '@chakra-ui/react'

import Animation from '../components/animation'
import MovieGrid from '../components/movies/grid'

const MoviesPage = () => {
  const movies = useSelector<Movies, Movies['entries']>(state => state.entries)

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
