import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../constants';

const HowIsTheRoad = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Comment est la route ?</h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                          
                            <Card>
                                {
                                    <Card.Content>
                                        <Card.Header>
                                        <p>La route est :</p>
                                        </Card.Header>
                                    <p>{ data.how_is_the_road }</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                    <Link href="/mork-borg/how-is-the-road">
                                        <a onClick={handleSubmit} className="list-link">Générer une autre route</a>
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

HowIsTheRoad.getInitialProps = async () => {
    //get random randomHowIsTheRoad
    let getProbabilityDice = Math.floor(Math.random() * 8);

    const resHowIsTheRoad = await fetch(CONST_URL+'/api/mork-borg/how-is-the-road');
    const dataHowIsTheRoad = await resHowIsTheRoad.json();
    let randomHowIsTheRoad = dataHowIsTheRoad[getProbabilityDice];
    return randomHowIsTheRoad;

}

export default HowIsTheRoad;