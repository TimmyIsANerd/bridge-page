import '../styles/globals.css';

import dynamic from 'next/dynamic';

const GlobalContextProvider = dynamic(() => import('../context/globalContext'), { ssr: false });

function MyApp({ Component, pageProps }) {
  return(
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default MyApp;