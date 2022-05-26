import data from '../data/sample.json'

import { MovieList } from '../types/movies'

type Action = {}

// eslint-disable-next-line no-unused-vars
const MoviesReducer = (state: MovieList = data, action: Action) => {
  return state
}

export default MoviesReducer
