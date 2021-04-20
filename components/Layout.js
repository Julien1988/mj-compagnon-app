import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>        
    <Head>
        <title>MJ Compagnion</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    {children}
    </>

)

export default Layout;