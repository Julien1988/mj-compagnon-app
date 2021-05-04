import Link from 'next/link'

const Mutant = () => {
    return (
        <div className='container'>
            <h1>Mutant page</h1>
            <ul className="list-container">
            <li className="list">
            <Link href="/mutant/environment">
                <a className="list-link">Générer un environnement</a>
            </Link>
            
    
                </li>
                <li className="list">
            <Link href="/mutant/environment">
                <a className="list-link">Générer un PNJ TODO</a>
            </Link>
            
    
            </li>
        
        </ul>
      </div>
    )
}

export default Mutant;