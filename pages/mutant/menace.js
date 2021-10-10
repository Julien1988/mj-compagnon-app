import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../constants';

const Menace = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Menace</h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                           {console.log(data)}
                            <Card>
                                {
                                    <Card.Content>
                                        <Card.Header>
                                            <p>{data.title}</p>
                                        </Card.Header>
                                        <p>{data.description}</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                <Link href="/mutant/menace">
                                    <a onClick={handleSubmit} className="list-link">Générer une autre menace</a>
                                </Link>
                            </li>
                            <li className="list">
                            <Link href="/mutant/environment">
                            <a onClick={handleSubmit} className="list-link">Générer un environnement</a>
                                </Link>
                            </li>
                            <li className="list">
                            <Link href="/mutant/pnj-generator">
                                <a onClick={handleSubmit} className="list-link">Générer un PNJ</a>
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

Menace.getInitialProps = async () => {
    //get random menace
    let randomMenace = Math.floor(Math.random() * 25);
    const resMenace = await fetch(CONST_URL+'/api/mutant/arche-menace');
    const dataMenace = await resMenace.json();
   
    console.log(randomArcheMenace)

    return randomArcheMenace;

}

export default Menace;