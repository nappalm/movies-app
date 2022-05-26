import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { FC } from 'react'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import { MovieItem } from '../../types/movies'

type ModalMovieProps = {
  onClose: () => void
  isOpen: boolean
} & MovieItem

const ModalMovie: FC<ModalMovieProps> = props => {
  const { isOpen, onClose } = props
  return (
    <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="50px"
      />
      <ModalContent>
        <ModalHeader>Detalle de pelicula</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap={10}>
            <img width="250" src={props?.images?.['Poster Art']?.url} />
            <Flex gap={1} direction="column">
              <Heading variant="section-title-sm">{props.title}</Heading>
              <Text>Año: {props.releaseYear}</Text>
              <Text>{props.description}</Text>
              <Button mt={5} rightIcon={<ArrowForwardIcon />} w="fit-content">
                Ver ahora
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalMovie
