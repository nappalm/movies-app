import { Flex, Heading } from '@chakra-ui/react'
import NextImage from 'next/image'
import { FC } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { MovieItem } from '../../types/movies'

interface localProps {
  image: string
  shadow?: boolean
  title?: string
  onClick?: () => void
}

export type MovieCardProps = Omit<MovieItem, 'images' | 'title'> & localProps

const shadow = css`
  box-shadow: 0.25rem 0.25rem #000;
  transform: translate(-0.25rem, -0.25rem);
`

const MovieCardStyle = styled(Flex)`
  position: relative;
  border: 0.2rem solid #000;
  border-radius: 0.3rem;
  background-color: #000;
  color: white;
  transition: all 0.14s ease-out;

  &:hover {
    cursor: pointer;
    ${shadow};
  }

  .preview-image {
    border-radius: 0.3rem;
  }

  ${props => props.shadow === 'true' && shadow};
`

const MovieCard: FC<MovieCardProps> = props => {
  const { image, title, shadow = false } = props

  return (
    <MovieCardStyle
      onClick={props.onClick}
      shadow={shadow.toString()}
      direction="column"
    >
      <NextImage
        height="470"
        width="315"
        className="preview-image"
        placeholder="blur"
        src={image}
        blurDataURL={image}
        alt={title}
      />
      {title && (
        <Heading as="h3" size="sm" py={2} px={2}>
          {title}
        </Heading>
      )}
    </MovieCardStyle>
  )
}

export default MovieCard
