import { Flex, Spinner } from '@chakra-ui/react'
import { FC } from 'react'

const Loading: FC<unknown> = () => {
  return (
    <Flex w="full" minH="300px" align="center" justify="center">
      <Spinner size="xl" />
    </Flex>
  )
}

export default Loading
