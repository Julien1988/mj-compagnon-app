import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Loader, Card } from 'semantic-ui-react'
import { CONST_URL } from '../../../constants';

const Town = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    console.log(data[0])
    return (
        <div className="container main-container">
            <h1>Génération d'un village</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">

            
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                <p>{data[0].town}</p>
                                    
                            </Card.Header> 
                                <div>
                                   <p>Habitants : {data[0].peoples}</p>
                                </div>
                                      
                        
                                
                            </Card.Content>     
                        </Card>
                        
                        <ul className="list-container">
                        <li className="list">
                        <Link href="/forbidden-lands/adventure-site/town">
                                <a onClick={handleSubmit} className="list-link">Générer un autre village</a>
                            </Link>
                        </li>
                        </ul>
                        
                </div>
            }
         
            
        </div>
    )
}

Town.getInitialProps = async () => {
    // utils fonct
    const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
    }

    let dataArray = [];
    // get type of town
    let getTypeOfTown;

    const typeOfTown = Math.round(getRandomArbitrary(1, 6));
    console.log(typeOfTown)
    if (typeOfTown < 3) {
        console.log("Avant-poste");
        getTypeOfTown = 0;
    } else if (typeOfTown > 2 && typeOfTown < 6) {
        console.log('Hameau')
        getTypeOfTown = 1;
    } else {
        console.log('Village');
        getTypeOfTown = 2;
    }

    // Api call Type Of Town
    const resTown = await fetch(CONST_URL+'/api/forbidden-lands/towns');
    const dataTown = await resTown.json();

    dataArray.push(dataTown[getTypeOfTown]);
    

    return dataArray

}

export default Town;