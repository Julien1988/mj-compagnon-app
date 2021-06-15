import Link from 'next/link';

const Header = () => (
    <header className="header">
        <nav className="navbar">
            <Link href="/">
                <a className="navbar-brand ">MJ Compagnon App</a>
            </Link>
        </nav>
    </header>

   
)

export default Header