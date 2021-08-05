import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../../constants';

const Combinard = (data) => {
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
                                <Link href="/mutant/pnj-generator/Combinard">
                                    <a onClick={handleSubmit} className="list-link">Générer un autre Combinard</a>
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

Combinard.getInitialProps = async () => {
    //get random Combinards
let getDataArray = [];

    let randomName = Math.floor(Math.random() * 6);
    let randomLook = Math.floor(Math.random() * 6);
    let randomGoal = Math.floor(Math.random() * 6);
    let randomStuff = Math.floor(Math.random() * 6);
    const resCombinard = await fetch(CONST_URL+'/api/mutant/pnj/combinards');
    const dataCombinard = await resCombinard.json();

    getDataArray.push(dataCombinard.["name"].[randomName]);
    getDataArray.push(dataCombinard.["look"].[randomLook]);
    getDataArray.push(dataCombinard.["goal"].[randomGoal]);
    getDataArray.push(dataCombinard.["stuff"].[randomStuff]);
          
    

    return getDataArray;

}

export default Combinard;