import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../../constants';

const Caid = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Générer un Caïd</h1>
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
                                <Link href="/mutant/pnj-generator/caid">
                                    <a onClick={handleSubmit} className="list-link">Générer un autre Caïd</a>
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

Caid.getInitialProps = async () => {
    //get random Caïd
let getDataArray = [];

    let randomName = Math.floor(Math.random() * 6);
    let randomLook = Math.floor(Math.random() * 6);
    let randomGoal = Math.floor(Math.random() * 6);
    let randomStuff = Math.floor(Math.random() * 6);
    const resCaid = await fetch(CONST_URL+'/api/mutant/pnj/caids');
    const dataCaid = await resCaid.json();

    getDataArray.push(dataCaid.["name"].[randomName]);
    getDataArray.push(dataCaid.["look"].[randomLook]);
    getDataArray.push(dataCaid.["goal"].[randomGoal]);
    getDataArray.push(dataCaid.["stuff"].[randomStuff]);
          
    

    return getDataArray;

}

export default Caid;