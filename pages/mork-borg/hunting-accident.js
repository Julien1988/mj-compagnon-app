import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../constants';

const HuntingAccident = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>HuntingAccident</h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                           {console.log(data)}
                            <Card>
                                {
                                    <Card.Content>
                                        <Card.Header>
                                        <p>Accident de chasse</p>
                                        </Card.Header>
                                        <p>{ data.hunting_accident }</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                    <Link href="/mork-borg/hunting-accident">
                                        <a onClick={handleSubmit} className="list-link">Générer une autre accident de chasse</a>
                                    </Link>
                            </li>
                            <li className="list">
                                    <Link href="/mork-borg">
                                        <a onClick={handleSubmit} className="list-link">Page précédente</a>
                                    </Link>
                                 </li>
                            </ul>
                        </div>
          }
            
      </div>
    )
}

HuntingAccident.getInitialProps = async () => {
    //get random randomHuntingAccident
   
    let randomHuntingAccidentDice = Math.floor(Math.random() * 10);
    const resHuntingAccidents = await fetch(CONST_URL+'/api/mork-borg/hunting-accidents');
    const dataHuntingAccidents = await resHuntingAccidents.json();
    console.log(dataHuntingAccidents[randomHuntingAccidentDice])
    let randomHuntingAccident = dataHuntingAccidents[randomHuntingAccidentDice];

    return randomHuntingAccident;

}

export default HuntingAccident;