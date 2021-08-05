import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../../constants';

const Chronicle = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Générer un Chroniqueur</h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                            <Card>
                                {
                                    <Card.Content>
                                        <Card.Header>
                                        <p>{data[0]}</p>
                                        </Card.Header>
                                        <p><b>Apparence :</b></p>
                                        <p>{data[1]}</p>
                                        <p><b>Objectif :</b></p>
                                        <p>{data[2]}</p>
                                        <p><b>Arme :</b></p>
                                        <p>{data[3]}</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                <Link href="/mutant/pnj-generator/chronicle">
                                    <a onClick={handleSubmit} className="list-link">Générer un autre Chroniqueur</a>
                                </Link>
                                </li>
                                <li className="list">
                                <Link href="/mutant/pnj-generator">
                                    <a onClick={handleSubmit} className="list-link">Générer un autre PNJ</a>
                                </Link>
                                </li>
                            </ul>
                        </div>
          }
            
      </div>
    )
}

Chronicle.getInitialProps = async () => {
    //get random Chronicles
let getDataArray = [];

    let randomName = Math.floor(Math.random() * 6);
    let randomLook = Math.floor(Math.random() * 6);
    let randomGoal = Math.floor(Math.random() * 6);
    let randomStuff = Math.floor(Math.random() * 6);
    const resChronicle = await fetch(CONST_URL+'/api/mutant/pnj/chronicles');
    const dataChronicle = await resChronicle.json();

    getDataArray.push(dataChronicle.["name"].[randomName]);
    getDataArray.push(dataChronicle.["look"].[randomLook]);
    getDataArray.push(dataChronicle.["goal"].[randomGoal]);
    getDataArray.push(dataChronicle.["stuff"].[randomStuff]);
          
    

    return getDataArray;

}

export default Chronicle;