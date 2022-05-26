import { useSelector } from 'react-redux'
import { Movies } from '../redux/reducer'

import { Flex, Heading } from '@chakra-ui/react'

import Animation from '../components/animation'
import Banner from '../components/movies/banner'
import MovieGrid from '../components/movies/grid'

const Main = () => {
  const movies = useSelector<Movies, Movies['entries']>(state => state.entries)

  return (
    <>
      <Flex gap={3} direction="column">
        <Banner movies={movies} />
        <Heading variant="section-title-sm">Series y peliculas</Heading>
        <Animation>
          <MovieGrid showAll movies={movies} />
        </Animation>
      </Flex>
    </>
  )
}

export default Main
