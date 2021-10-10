import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../constants';

const InTheBelly = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Dans le ventre de la bête*, </h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                          
                            <Card>
                                {
                                    <Card.Content>
                                        <Card.Header>
                                        <p>vous trouvez...</p>
                                        </Card.Header>
                                    <p>{ data.in_the_belly_of_the_beast }</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                    <Link href="/mork-borg/in-the-belly-of-the-beast">
                                        <a onClick={handleSubmit} className="list-link">Générer un autre ventre</a>
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

InTheBelly.getInitialProps = async () => {
    //get random randomInTheBelly
    let getProbabilityDice = Math.floor(Math.random() * 10);

    const resInTheBelly = await fetch(CONST_URL+'/api/mork-borg/in-the-belly-of-the-beast');
    const dataInTheBelly = await resInTheBelly.json();
    let randomInTheBelly = dataInTheBelly[getProbabilityDice];
    return randomInTheBelly;

}

export default InTheBelly;