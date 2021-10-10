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
            <h1>Mörg Börg</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    :   <ul className="list-container">
                            <li className="list">
                            <Link href="/mork-borg/hunting-accident">
                                <a onClick={handleSubmit} className="list-link">Accidents de chasse</a>
                            </Link>
                            </li>
                            
                        </ul>
            }
            
      </div>
    )
}

export default ForbiddenLands;