import { FC, useEffect, useState } from 'react'
import { SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { chain } from 'lodash'

import MovieCard from './card'
import ModalInfo from './modal-info'
import Loading from './_loading'
import Animation from '../animation'

import { MovieEntries, MovieItem } from '../../types/movies'

type GridBaseProps = {
  movies: MovieEntries
  filter?: 'movie' | 'series'
  showAll?: boolean
}

const GridTemplate: FC<GridBaseProps> = props => {
  const [moviesFiltered, setMoviesFiltered] = useState<MovieEntries>(undefined)
  const [movieSelected, setMovieSelected] = useState<MovieItem>(undefined)

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const { movies, filter, showAll } = props

    const moviesData = chain(movies)
      .filter(movie => movie.releaseYear >= 2010)
      .filter((movie: any) => {
        if (showAll) {
          return movie
        }

        return movie.programType === filter
      })
      .orderBy(['title'], ['asc'])
      .sampleSize(20)
      .value()

    // En un caso más real no es necesario un interval
    // se tomara el tiempo de carga dependiendo de la respuesta del servidor.
    const interval = setInterval(() => {
      setMoviesFiltered(moviesData)
    }, 1000)

    return () => clearInterval(interval)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (moviesFiltered === undefined) return <Loading />
  return (
    <>
      <ModalInfo isOpen={isOpen} onClose={onClose} {...movieSelected} />
      <Animation>
        <SimpleGrid gap={5} columns={[1, 2, 5, 6]}>
          {moviesFiltered.map((item, i) => (
            <MovieCard
              key={i}
              title={item.title}
              image={item.images['Poster Art'].url}
              onClick={() => {
                setMovieSelected(item)
                onOpen()
              }}
            />
          ))}
        </SimpleGrid>
      </Animation>
    </>
  )
}

export default GridTemplate
