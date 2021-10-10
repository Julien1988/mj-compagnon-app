import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../constants';

const NigtlyEntertainment = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Animations nocturnes au camping</h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                           {console.log(data)}
                            <Card>
                                {
                                    <Card.Content>
                                        <Card.Header>
                                        <p>Animation nocture</p>
                                        </Card.Header>
                                    <p>{ data.nightly_entertainment }</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                    <Link href="/mork-borg/nigtly-entertainment">
                                        <a onClick={handleSubmit} className="list-link">Générer une autre animations nocturnes au camping</a>
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

NigtlyEntertainment.getInitialProps = async () => {
    //get random randomNigtlyEntertainment
    let getProbabilityDice = Math.floor(Math.random() * 12);

    let randomNigtlyEntertainmentDice;
    if (getProbabilityDice <= 5) {
        randomNigtlyEntertainmentDice = 0;
    } else {
        randomNigtlyEntertainmentDice = Math.floor(Math.random() * 7) + 1;
    }
    
    
    const resNigtlyEntertainment = await fetch(CONST_URL+'/api/mork-borg/nightly-entertainment-at-the-campsite');
    const dataNigtlyEntertainment = await resNigtlyEntertainment.json();

    let randomNigtlyEntertainment = dataNigtlyEntertainment[randomNigtlyEntertainmentDice];

    return randomNigtlyEntertainment;

}

export default NigtlyEntertainment;