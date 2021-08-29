import Link from 'next/link'
import {useState} from 'react'
import { Loader } from 'semantic-ui-react'

const ForbiddenLands = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    return (
        <div className='container main-container'>
            <h1>Forbidden Lands</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    :   <ul className="list-container">
                            <li className="list">
                            <Link href="/forbidden-lands/adventure-site">
                                <a onClick={handleSubmit} className="list-link">Générer un site d'aventure</a>
                            </Link>
                            </li>
                            
                        </ul>
            }
            
      </div>
    )
}

export default ForbiddenLands;