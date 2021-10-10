import Link from 'next/link'
import {useState} from 'react'
import { Loader } from 'semantic-ui-react'

const MorkBorg = () => {
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
                            <li className="list">
                                <Link href="/mork-borg/nigtly-entertainment">
                                    <a onClick={handleSubmit} className="list-link">Animations nocturnes au camping</a>
                                </Link>
                            </li>
                            <li className="list">
                                <Link href="/mork-borg/how-is-the-road">
                                    <a onClick={handleSubmit} className="list-link">Comment est la route ?</a>
                                </Link>
                        </li>
                        <li className="list">
                                <Link href="/mork-borg/in-the-belly-of-the-beast">
                                    <a onClick={handleSubmit} className="list-link">Dans le ventre de la bête</a>
                                </Link>
                        </li>
                        <li className="list">
                                <Link href="/mork-borg/meeting-in-wilderness">
                                    <a onClick={handleSubmit} className="list-link">Rencontre en terre sauvage</a>
                                </Link>
                        </li>
                        <li className="list">
                                <Link href="/mork-borg/the-village-is">
                                    <a onClick={handleSubmit} className="list-link">Le village est</a>
                                </Link>
                            </li>
                        </ul>
            }
            
      </div>
    )
}

export default MorkBorg;