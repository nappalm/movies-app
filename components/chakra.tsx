import { ChakraProvider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

import theme from '../theme/config'

type ChakraProps = {
  children?: ReactNode
}

const Chakra: FC<ChakraProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default Chakra
