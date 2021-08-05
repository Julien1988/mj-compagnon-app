import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../../constants';

const DogTrainer = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>Générer un Maître-chien</h1>
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
                                <Link href="/mutant/pnj-generator/dog-trainer">
                                    <a onClick={handleSubmit} className="list-link">Générer un autre Maître-chien</a>
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

DogTrainer.getInitialProps = async () => {
    //get random DogTrainers
let getDataArray = [];

    let randomName = Math.floor(Math.random() * 6);
    let randomLook = Math.floor(Math.random() * 6);
    let randomGoal = Math.floor(Math.random() * 6);
    let randomStuff = Math.floor(Math.random() * 6);
    const resDogTrainer = await fetch(CONST_URL+'/api/mutant/pnj/dog-trainers');
    const dataDogTrainer = await resDogTrainer.json();

    getDataArray.push(dataDogTrainer.["name"].[randomName]);
    getDataArray.push(dataDogTrainer.["look"].[randomLook]);
    getDataArray.push(dataDogTrainer.["goal"].[randomGoal]);
    getDataArray.push(dataDogTrainer.["stuff"].[randomStuff]);
          
    

    return getDataArray;

}

export default DogTrainer;