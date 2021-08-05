import Link from 'next/link'
import {useState} from 'react'
import { Loader } from 'semantic-ui-react'

const PnjGenerator = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    return (
        <div className='container main-container'>
            <h1>Générez un PNJ</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    :   <ul className="list-container">
                            <li className="list">
                            <Link href="/mutant/pnj-generator/caid">
                                <a onClick={handleSubmit} className="list-link">Générer un Caïd</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/chronicle">
                                <a onClick={handleSubmit} className="list-link">Générer un Chroniqueur</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/combinard">
                                <a onClick={handleSubmit} className="list-link">Générer un Combinard</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/slave">
                                <a onClick={handleSubmit} className="list-link">Générer un Esclave</a>
                            </Link>
                        </li>
                             
                        </ul>
            }
            
      </div>
    )
}

export default PnjGenerator;