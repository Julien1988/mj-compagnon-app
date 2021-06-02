import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
//import {   } from 'semantic-ui-react';

const Index = () => {
  return (
    <div className="container">
      <h1>Bienvenu sur le compagnon du MJ</h1>
      <h2>Choisisez un jeu</h2>
      <ul className="list-container">
        <li className="list">
          <Link href="/mutant">
            <a className="list-link">Mutant</a>
          </Link>
        </li>
        {/* <li className="list">
          <Link href="/alien">
            <a className="list-link">Alien</a>
          </Link>
        </li> */}
      </ul>

    </div>
  )
}

export default Index;