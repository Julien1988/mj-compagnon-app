import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../constants';

const TheVillageIs = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Le village est </h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                          
                            <Card>
                                {
                                    <Card.Content>
                                    <p>{ data.the_village_is }</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                    <Link href="/mork-borg/the-village-is">
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

TheVillageIs.getInitialProps = async () => {
    //get random randomTheVillageIs
    let getProbabilityDice = Math.floor(Math.random() * 6);

    const resTheVillageIs = await fetch(CONST_URL+'/api/mork-borg/the-village-is');
    const dataTheVillageIs = await resTheVillageIs.json();
    let randomTheVillageIs = dataTheVillageIs[getProbabilityDice];
    return randomTheVillageIs;

}

export default TheVillageIs;