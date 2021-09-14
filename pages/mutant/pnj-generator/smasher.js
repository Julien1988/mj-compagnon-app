import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../../constants';

const Smasher = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Générer un Fracasseur</h1>
          {
               isSubmitting
                    ? <Loader active inline="centered" />
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
                                <Link href="/mutant/pnj-generator/smasher">
                                    <a onClick={handleSubmit} className="list-link">Générer un autre Fracasseur</a>
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

Smasher.getInitialProps = async () => {
    //get random Smashers
let getDataArray = [];

    let randomName = Math.floor(Math.random() * 6);
    let randomLook = Math.floor(Math.random() * 6);
    let randomGoal = Math.floor(Math.random() * 6);
    let randomStuff = Math.floor(Math.random() * 6);
    const resSmasher = await fetch(CONST_URL+'/api/mutant/pnj/smashers');
    const dataSmasher = await resSmasher.json();

    getDataArray.push(dataSmasher.["name"].[randomName]);
    getDataArray.push(dataSmasher.["look"].[randomLook]);
    getDataArray.push(dataSmasher.["goal"].[randomGoal]);
    getDataArray.push(dataSmasher.["stuff"].[randomStuff]);
          
    

    return getDataArray;

}

export default Smasher;