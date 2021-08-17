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
    console.log(data[1])
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
                                <div>
                                    <p>Période de construction: {data[1].construction_period} ({data[1].age})</p>
                                    
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
    // data array to return
    let dataArray = [];

    // get type of town
    let getTypeOfTown;

    const typeOfTown = Math.round(getRandomArbitrary(1, 6));
    console.log(typeOfTown)
    if (typeOfTown < 3) {
       // console.log("Avant-poste");
        getTypeOfTown = 0;
    } else if (typeOfTown > 2 && typeOfTown < 6) {
       // console.log('Hameau')
        getTypeOfTown = 1;
    } else {
       // console.log('Village');
        getTypeOfTown = 2;
    }

    // Api call Type Of Town
    const resTown = await fetch(CONST_URL+'/api/forbidden-lands/towns');
    const dataTown = await resTown.json();

    dataArray.push(dataTown[getTypeOfTown]);

    // get age of town
    let getAgeOfTown;
    const ageOfTownDice = Math.round(getRandomArbitrary(11, 66));
    console.log(ageOfTownDice)

    // Api call Age Of Town
    const resAgeOfTown = await fetch(CONST_URL+'/api/forbidden-lands/age-of-the-village');
    const dataAgeOfTown = await resAgeOfTown.json();
    if (ageOfTownDice < 17) {
        getAgeOfTown = 0;
    } else if (ageOfTownDice > 16 && ageOfTownDice < 26) {
        getAgeOfTown = 1;
    } else if (ageOfTownDice > 25 && ageOfTownDice < 57) {
        getAgeOfTown = 2;
    } else {
        getAgeOfTown = 3;
    }
    dataArray.push(dataAgeOfTown[getAgeOfTown]);
    
    
    // let num = 15;
    // let n = num.toString();
    // console.log(n)
    

    return dataArray

}

export default Town;