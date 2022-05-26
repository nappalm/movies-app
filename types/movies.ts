interface ImageObj {
  [key: string]: {
    url: string
    width: number
    height: number
  }
}

type ProgramTypes = 'movie' | 'series' | ''

export interface MovieItem {
  title: string
  description?: string
  programType?: ProgramTypes | string
  images?: ImageObj
  releaseYear?: number
}

export interface MovieList {
  total: number
  entries: Array<MovieItem>
}

export type MovieEntries = Array<MovieItem>
