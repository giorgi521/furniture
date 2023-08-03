import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import {ApolloProvider } from '@apollo/client';
import { useApollo } from '../shared/lib/apolloClient';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {CartProvider} from '@/components/helper/context';
 
type AppPropsWithLayout = AppProps & {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode
  }
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const getLayout = Component.getLayout ?? ((page) => page);
 
  return getLayout(
    <ApolloProvider client={apolloClient}>
       <Component {...pageProps} />
    </ApolloProvider>
  );
}