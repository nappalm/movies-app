import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fff', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 30,
        textUnderlineOffset: 6,
        textDecorationColor: '#ef4f5c',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'section-title-sm': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#000',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Modal: {
    baseStyle: {
      dialog: {
        borderRadius: '0.2rem',
        border: '0.2rem solid black',
        boxShadow: '1px 1px black, 2px 2px black, 3px 3px black'
      },
      header: {
        borderBottom: '1.5px dashed black',
        fontSize: 'md'
      }
    }
  }
}

const fonts = {
  heading: 'Urbanist',
  body: 'Urbanist'
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
