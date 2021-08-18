import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Loader, Card } from 'semantic-ui-react'
import { CONST_URL } from '../../../constants';

const Town = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
     const [nothingEstablishment, setNothingEstablishment] = useState(0);
     const [hostelEstablishment, setHostelEstablishment] = useState(0);
     const [millEstablishment, setMillEstablishment] = useState(0);
     const [blackSmithEstablishment, setBlackSmithEstablishment] = useState(0);
     const [sawmillEstablishment, setSawmillEstablishment] = useState(0);
     const [counterEstablishment, setCounterEstablishment] = useState(0);
    const [templeEstablishment, setTempleEstablishment] = useState(0);
     const [militiaEstablishment, setMilitiaEstablishment] = useState(0);
     const [tavernEstablishment, setTavernEstablishment] = useState(0);
     const [stableEstablishment, setStableEstablishment] = useState(0);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    //.log(data[6].length)
    //console.log(data[6])

    let nothingEstablishmentNumber = 0;
    let hostelEstablishmentNumber = 0;
    let millEstablishmentNumber = 0;
    let blackSmithEstablishmentNumber = 0;
    let sawmillEstablishmentNumber = 0;
    let counterEstablishmentNumber = 0;
    let templeEstablishmentNumber = 0;
    let militiaEstablishmentNumber = 0;
    let tavernEstablishmentNumber = 0;
    let stableEstablishmentNumber = 0;

    

    data[6].forEach(element => {
        console.log(element.village_establishment)
       
        switch (element.village_establishment) {
            case 'Rien':
                console.log('Rien');
                nothingEstablishmentNumber++
                break;

            case 'Auberge':
                console.log('Auberge');
                hostelEstablishmentNumber++
                break;
            case 'Moulin':
                console.log('Moulin');
                millEstablishmentNumber++
                
                break;
            case 'Forgeron':
                console.log('Forgeron');
                blackSmithEstablishmentNumber++
                
                break;
            case 'Scierie':
                console.log('Scierie');
                sawmillEstablishmentNumber++
                
                break;
            case 'Comptoir':
                console.log('Comptoir');
                counterEstablishmentNumber++
                
                break;
            case 'Temple':
                console.log('Temple');
                templeEstablishmentNumber++
                
                break;
            case 'Milice':
                console.log('Milice');
                militiaEstablishmentNumber++
                
                break;
            case 'Taverne':
                console.log('Taverne');
                tavernEstablishmentNumber++
                
                break;
            case 'Écurie':
                console.log('Écurie');
                stableEstablishmentNumber++
                
                break;
            default:
                console.log(`Oups`);
        }
    });

    let establishmentsArray = [];
// CONTINUER ICI TODO !!!!
    if (nothingEstablishmentNumber > 0) {
        let nothingEstablishmentObject = {
            rien: nothingEstablishmentNumber,
        }
        establishmentsArray.push(nothingEstablishmentObject)
    } else if (hostelEstablishmentNumber > 0 ) {
        let hostelEstablishmentObject = {
            auberge: hostelEstablishmentNumber,
        }
        establishmentsArray.push(hostelEstablishmentObject)
    }

    console.log('ze test', establishmentsArray)
   
    
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
                                <div>
                                    <p>Chef du village :</p>
                                    {
                                        data[2].chef_type == "Pas de chef"
                                            ? <p>Pas de chef</p>
                                            :  <ul>
                                                    <li>
                                                        <p>Spécificité: {data[2].peculiarity} </p>
                                                        </li>
                                                        <li>
                                                        <p>Type de chef: {data[2].chef_type} </p>
                                                    </li>
                                                </ul>
                                    }
                                </div>
                                <div>
                                    <p>Problème du village : {data[3].probem}</p>
                                </div>
                                <div>
                                    <p>Célèbre pour : {data[4].famous_for}</p>
                                </div>
                                <div>
                                    <p>Particularité du village : {data[5].village_particularity}</p>
                                </div>
                                <div>
                                    <p>Etablissements du village : </p>
                                    <ul>
                                        {/* {data[6].map((post) =>
                                            <li >
                                                {post.village_establishment}
                                            </li>
                                        )} */}
                                    </ul>
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

    // get village establishment number dice
    let villageEstablishmentDiceNumber;

    const typeOfTown = Math.round(getRandomArbitrary(1, 6));
    console.log(typeOfTown)
    if (typeOfTown < 3) {
       // console.log("Avant-poste");
        getTypeOfTown = 0;
        // get village establishment number of dice
        villageEstablishmentDiceNumber = 1;
        
    } else if (typeOfTown > 2 && typeOfTown < 6) {
       // console.log('Hameau')
        getTypeOfTown = 1;
        // get village establishment number of dice
        villageEstablishmentDiceNumber = 3;
    } else {
       // console.log('Village');
        getTypeOfTown = 2;
        // get village establishment number of dice
        villageEstablishmentDiceNumber = 5 + Math.round(getRandomArbitrary(1, 6));
    }
  
    // Api call Type Of Town
    const resTown = await fetch(CONST_URL+'/api/forbidden-lands/towns');
    const dataTown = await resTown.json();

    dataArray.push(dataTown[getTypeOfTown]);

    // get age of town
    let getAgeOfTown;
    const ageOfTownDice = Math.round(getRandomArbitrary(11, 66));

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
    
    // get type of chief pecularity
    let getTypeOfChiefPeculiarity;
    // get type of chief type
    let getTypeOfChiefType;

    // get type of chief array
    let getTypeOfChiefObject;

    const typeOfChiefFirstDice = Math.round(getRandomArbitrary(0, 11));
    const typeOfChiefSecondDice = Math.round(getRandomArbitrary(0, 11));
    
    // Api call Type Of Chief
    const resTypeOfChief = await fetch(CONST_URL+'/api/forbidden-lands/chief-of-the-village');
    const dataTypeOfChief = await resTypeOfChief.json();
    //console.log(dataTypeOfChief)
    getTypeOfChiefPeculiarity = dataTypeOfChief[typeOfChiefFirstDice].peculiarity;
    getTypeOfChiefType = dataTypeOfChief[typeOfChiefSecondDice].chef_type;
    getTypeOfChiefObject = {
        peculiarity: getTypeOfChiefPeculiarity,
        chef_type: getTypeOfChiefType
    };
    //console.log(getTypeOfChiefObject)
    
    dataArray.push(getTypeOfChiefObject);

    // get type of village problem
    let getVillageProblem;

     // Api call Village Problems
     const resVillageProblems = await fetch(CONST_URL+'/api/forbidden-lands/village-problems');
    const dataVillageProblems = await resVillageProblems.json();
    // console.log(dataVillageProblems)
    const villageProblemDice = Math.round(getRandomArbitrary(0, 11));
    getVillageProblem = dataVillageProblems[villageProblemDice];

    dataArray.push(getVillageProblem);

    // get type of village reputation
    let getVillageReputation;

    // Api call Village Reputations
    const resVillageReputations = await fetch(CONST_URL+'/api/forbidden-lands/village-reputations');
    const dataVillageReputations = await resVillageReputations.json();
    // console.log(dataVillageReputations)
    const villageReputationDice = Math.round(getRandomArbitrary(0, 11));
    getVillageReputation = dataVillageReputations[villageReputationDice];

    dataArray.push(getVillageReputation);

     // get type of village reputation
     let getVillageParticularity;

     // Api call Village Particularity
     const resVillageParticularity = await fetch(CONST_URL+'/api/forbidden-lands/village-particularity');
     const dataVillageParticularity = await resVillageParticularity.json();
     // console.log(dataVillageParticularity)
     const villageParticularityDice = Math.round(getRandomArbitrary(0, 18));
     getVillageParticularity = dataVillageParticularity[villageParticularityDice];
 
    dataArray.push(getVillageParticularity);
    
    // get type of village-establishment
    let getVillageEstablishmentArray = []
    // USE villageEstablishmentDiceNumber 

    // Api call village Establishment
    const resVillageEstablishments = await fetch(CONST_URL+'/api/forbidden-lands/village-establishments');
    const dataVillageEstablishments = await resVillageEstablishments.json();
   
    
    for (let i = 0; i < villageEstablishmentDiceNumber; i++) {
        const villageEstablishmentDice = Math.round(getRandomArbitrary(0, 9));
        getVillageEstablishmentArray.push(dataVillageEstablishments[villageEstablishmentDice])
    }
    //console.log(getVillageEstablishmentArray);
    dataArray.push(getVillageEstablishmentArray);


    return dataArray

}

export default Town;