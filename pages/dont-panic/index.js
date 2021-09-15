import Link from 'next/link'
import {useState} from 'react'
import { Loader, Card } from 'semantic-ui-react'

const DontPanic = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    return (
        <div className='container main-container'>
            <h1>Don't Panic</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    : <div className="main-container__content">
                        
                        <ul className="list-container">
                          
                            <li className="list">
                            <Link href="/dont-panic/play">
                                <a onClick={handleSubmit} className="list-link">Jouer au jeu</a>
                            </Link>
                            </li>
                            <li className="list">
                               
                               <Link href="https://guillaumejentey.itch.io">
                                   <a className="list-link">Ce jeu est une création originale de Jentey Guillaume</a>
                               </Link>   
                           </li>
                            <li className="list">
                                <Link href="https://guillaumejentey.itch.io/dont-panic-englishfrancais">
                                    <a className="list-link">La page officielle des règles du jeu.</a>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
            }
            
      </div>
    )
}

export default DontPanic;