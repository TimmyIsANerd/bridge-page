import Head from 'next/head'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Home() {
  return(
    <>
      <Head>
        {/* Change Page Title Here */}
        <title>Bridge Page</title>
      </Head>
      <Navbar />

      <Footer />
    </>
  )
}


export default Home;