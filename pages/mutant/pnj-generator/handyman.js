import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../../constants';

const Handyman = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Générer un Rafistoleur</h1>
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
                                <Link href="/mutant/pnj-generator/handyman">
                                    <a onClick={handleSubmit} className="list-link">Générer un autre Rafistoleur</a>
                                </Link>
                                </li>
                                <li className="list">
                                <Link href="/mutant/pnj-generator">
                                    <a onClick={handleSubmit} className="list-link">Générer un autre PNJ</a>
                                </Link>
                            </li>
                            <li className="list">
                                <Link href="/mutant/menace">
                                    <a onClick={handleSubmit} className="list-link">Générer une menace</a>
                                </Link>
                            </li>
                            <li className="list">
                            <Link href="/mutant/environment">
                            <a onClick={handleSubmit} className="list-link">Générer un environnement</a>
                                </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant">
                                <a className="list-link">Retour à la page Mutant</a>
                            </Link>
                            </li>
                            </ul>
                        </div>
          }
            
      </div>
    )
}

Handyman.getInitialProps = async () => {
    //get random Handymans
let getDataArray = [];

    let randomName = Math.floor(Math.random() * 6);
    let randomLook = Math.floor(Math.random() * 6);
    let randomGoal = Math.floor(Math.random() * 6);
    let randomStuff = Math.floor(Math.random() * 6);
    const resHandyman = await fetch(CONST_URL+'/api/mutant/pnj/handymans');
    const dataHandyman = await resHandyman.json();

    getDataArray.push(dataHandyman.["name"].[randomName]);
    getDataArray.push(dataHandyman.["look"].[randomLook]);
    getDataArray.push(dataHandyman.["goal"].[randomGoal]);
    getDataArray.push(dataHandyman.["stuff"].[randomStuff]);
          
    

    return getDataArray;

}

export default Handyman;