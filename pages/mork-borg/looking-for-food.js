import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../constants';

const LookingForFood = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Passer une journée à chercher de la nourriture</h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                          
                            <Card>
                                {
                                    <Card.Content>
                                    <p>{ data.looking_for_food }</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                    <Link href="/mork-borg/looking-for-food">
                                        <a onClick={handleSubmit} className="list-link">Générer un autre résultat</a>
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

LookingForFood.getInitialProps = async () => {
    //get random randomLookingForFood
    let getProbabilityDice = Math.floor(Math.random() * 6);

    const resLookingForFood = await fetch(CONST_URL+'/api/mork-borg/looking-for-food');
    const dataLookingForFood = await resLookingForFood.json();
    let randomLookingForFood = dataLookingForFood[getProbabilityDice];
    return randomLookingForFood;

}

export default LookingForFood;