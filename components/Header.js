import Link from 'next/link';
import {useEffect, useState} from 'react'
//import Image from 'next/Image';


const Header = () => {
    const [imageUrl, setImageUrl] = useState("./../svg/dice-20.svg")

    return (
        <header className="header">
        <nav className="navbar">
            <Link href="/">
                <a className="navbar-brand ">MJ Compagnon App</a>
            </Link>
        </nav>
     

        <img className="header__image-component" src={imageUrl }/>
        
       
    </header>
    )
   

   
}



export default Header