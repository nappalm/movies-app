import { AppProps } from 'next/app'

import NextNProgress from 'nextjs-progressbar'

import Chakra from '../components/chakra'
import Fonts from '../components/fonts'
import Layout from '../components/layout'

import { store } from '../redux/store'
import { Provider } from 'react-redux'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function App({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra>
      <Fonts />
      <Provider store={store}>
        <Layout router={router}>
          <NextNProgress color="#000" height={3} />
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Provider>
    </Chakra>
  )
}

export default App
