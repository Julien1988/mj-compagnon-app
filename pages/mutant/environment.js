import Link from 'next/link';
import {Card} from 'semantic-ui-react'

const Environment = (data) => {
    console.log(data)
    return (
        <div className="container">
            <h1>Environnement</h1>
            <Card>
            
                { <Card.Content>
                    <Card.Header>
                        <p>{data[0].environment}</p>
                        
                    </Card.Header>
                    {
                        data[0].ruin
                            ? <p>{data[1].type_of_ruin}</p>
                            : <p>Pas de ruine</p>
                    }
                    {
                        data[2].level
                            ? <p><b>Niveau de gangrène : {data[2].level} </b><br></br> {data[2].description}</p>
                            : <p>Pas de mangrène</p>
                        
                    }
                    {
                        data[3].level
                            ? <p><b>Niveau de danger : {data[3].level} </b><br></br> {data[3].description}</p>
                            : <p></p>
                        
                    }
                    {
                        data[5][0]
                        ? <p><b>List des menaces</b></p>
                        : <p><b>Pas menace</b></p>
                    }
                    {data[5].map(da => {
                        return (
                            <div>
                              
                                {
                                    da.humanoide
                                        ? <p>{da.humanoide}</p>
                                        : <p></p>
                                }
                                {
                                    da.monster
                                        ? <p>{da.monster}</p>
                                        : <p></p>
                                }
                                {
                                    da.phenomenon
                                        ? <p>{da.phenomenon}</p>
                                        : <p></p>
                                }
                           </div>
                       )
                    })}
                    {
                        data[6][0]
                            ? <p><b>List des artefacts</b></p>
                            : <p><b>Pas artefact</b></p>
                    }
                    {data[6].map(da => {
                        return (
                            <div>
                              
                                {
                                    da.artifact
                                        ? <p>{da.artifact}</p>
                                        : <p></p>
                                }
                               
                           </div>
                       )
                   })}
                  
                 

                    
                </Card.Content> }
                </Card>
        </div>
    )
}

Environment.getInitialProps = async () => {
    // dev / prod const
    const CONST_URL = 'https://boring-kalam-20f4b5.netlify.app'
    //const CONST_URL = 'http://localhost:3000'
    // utils fonct
    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      }

    // get random environment
    let dataArray = [];
    let randomEnvironment = Math.floor(Math.random() * 13);
    // get random ruin
    let randomRuin = Math.floor(Math.random() * 47);
    // get random gangrene
    let randomGangrene = Math.round(getRandomArbitrary(11, 66));
    // get random menace TODO DEBUG OFF !!!!
    let randomMenace = Math.floor(Math.random() * 9);
    // get environment
    const resEnvironment = await fetch(CONST_URL+'/api/mutant/environment');
    const dataEnvironment = await resEnvironment.json();
    // get ruin
    const resRuin = await fetch(CONST_URL+'/api/mutant/ruin');
    const dataRuin = await resRuin.json();
    // get gangrene
    let randomPropGangrene = 0;
    const resGangrene = await fetch(CONST_URL+'/api/mutant/gangrene');
    const dataGangrene = await resGangrene.json();
    if (randomGangrene > 0 && randomGangrene < 13) {
        randomPropGangrene = 0
        //console.log("plus petit que 12", randomGangrene)

    } else if (randomGangrene > 12 && randomGangrene < 56) {
        randomPropGangrene = 1
        //console.log("plus petit que 55", randomGangrene)
    } else {
        randomPropGangrene = 2
        //console.log("plus grand que 55", randomGangrene)
    }
    // get menace
    let randomPropMenace = 0;
    const resMenace = await fetch(CONST_URL+'/api/mutant/menace');
    const dataMenace = await resMenace.json();
    if (randomMenace < 5) {
        randomPropMenace = 0;
    } else if ( randomMenace > 4 && randomMenace < 9) {
        randomPropMenace = 1;
    } else {
        randomPropMenace = 2;
    }
    // get the lvl exact menace number to the object
    dataMenace[randomPropMenace]['level'] = randomMenace;
    //console.log(dataMenace[randomPropMenace])

    // Menace and Artifact 
    let diceMenaceCount = 0;
    let diceArtifactCount = 0;
    for (let i = 0; i < randomMenace; i++) {
        let randomDice = Math.floor(Math.random() * 6);
        //console.log(randomDice)
        if (randomDice == 0) {
            diceMenaceCount++
        } else if (randomDice == 5) {
            diceArtifactCount++
        }
    }
    //console.log(diceMenaceCount, diceArtifactCount)
    
    const menaceAndArtifactNumberArray = {
        menaces: diceMenaceCount,
        artifacts: diceArtifactCount
    };

    // type of menace
    let menacesArray = {
        humanoides: 0,
        monsters: 0,
        phenomenons: 0
    };
    //console.log(diceMenaceCount)
    if (diceMenaceCount > 0) {
        for (let i = 0; i < diceMenaceCount; i++) {
            const typeOfMenace = Math.floor(Math.random() * 6) + 1;
            //console.log(typeOfMenace)
            if (typeOfMenace < 3) {
                menacesArray['humanoides'] = menacesArray['humanoides']+1
                
            } else if (typeOfMenace > 2 && typeOfMenace < 6) {
                menacesArray['monsters'] = menacesArray['monsters']+1
            } else if (typeOfMenace > 6) {
                menacesArray['phenomenon'] = menacesArray['phenomenon']+1
            }
        }
    } 
    //console.log(menacesArray)

    let dataMenaceArray = [];
    
    if (menacesArray['humanoides'] > 0) {
        // take humanoides 15
        const resHumanoides = await fetch(CONST_URL+'/api/mutant/humanoide');
        const dataHumanoides = await resHumanoides.json();
        for (let i = 0; i < menacesArray['humanoides']; i++) {
            let randomNumber = Math.floor(Math.random() * 15);
            dataMenaceArray.push(dataHumanoides[randomNumber]);
        }

        
    } if (menacesArray['monsters'] > 0) {
        // take monsters 24
        const resMonsters = await fetch(CONST_URL+'/api/mutant/monster');
        const dataMonsters = await resMonsters.json();
        for (let i = 0; i < menacesArray['monsters']; i++) {
            let randomNumber = Math.floor(Math.random() * 23);
            dataMenaceArray.push(dataMonsters[randomNumber]);
        }
        
    } if (menacesArray['phenomenons'] > 0) {
         // take pheniomenon 19
         const resPhenomenons = await fetch(CONST_URL+'/api/mutant/phenomenon');
        const dataPhenomenons = await resPhenomenons.json();
        for (let i = 0; i < menacesArray['phenomenons']; i++) {
            let randomNumber = Math.floor(Math.random() * 19);
            dataMenaceArray.push(dataPhenomenons[randomNumber]);
        }
        
    }
    
    //console.log(dataMenaceArray);
    
        

    // get the menace by type
    // TODO -- Tirer au hazard les différentes sortes d'artefacts et retirer le 99 du DEBUG
    // TODO -- Modifier la probabilités d'artefact (d666)
    // TODO -- attention empecher le fait d'avoir plusieurs fois le mm résultat
    // Nombre d'artefacts : diceArtifactCount
    let dataArtifactArray = [];
    for (let i = 0; i < diceArtifactCount; i++) {
        let randomNumber = Math.floor(Math.random() * 50);
        const resArtifacts = await fetch(CONST_URL+'/api/mutant/artifacts');
        const dataArtifacts = await resArtifacts.json();
        //console.log(dataArtifacts[randomNumber]);
        dataArtifactArray.push(dataArtifacts[randomNumber])
    }
  
    

    // push all datas in array
    dataArray.push(dataEnvironment[randomEnvironment])
    dataArray.push(dataRuin[randomRuin])
    dataArray.push(dataGangrene[randomPropGangrene])
    dataArray.push(dataMenace[randomPropMenace])
    dataArray.push(menaceAndArtifactNumberArray);
    dataArray.push(dataMenaceArray);
    dataArray.push(dataArtifactArray);
    
    return dataArray;
    
  }


export default Environment;