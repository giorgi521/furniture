import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
 
type AppPropsWithLayout = AppProps & {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode
  }
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}