import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>        
    <Head>
        <title>MJ Compagnon</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
        {children}
    <Footer />
    </>


)

export default Layout;