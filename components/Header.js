import Link from 'next/link';
//import Image from 'next/Image';
const Header = () => (
    <header className="header">
        <nav className="navbar">
            <Link href="/">
                <a className="navbar-brand ">MJ Compagnon App</a>
            </Link>
        </nav>
     
        {/* <Image
            className="header__image-component"
            src="./svg/dice-20.svg"
            alt="Dice svg"
            width={50}
            height={50}
        /> */}
       
    </header>

   
)

export default Header