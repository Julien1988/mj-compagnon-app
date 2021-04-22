import Link from 'next/link';
import {Card} from 'semantic-ui-react'

const Environment = (data) => {
    console.log(data)
    return (
        <div className="container">
            <h1>environnement</h1>
            <Card>
                {/* <Card.Content>
                    <Card.Header>
                    <p>{data[0].environment}</p>
                    </Card.Header>
                    {
                        data[0].ruin
                        
                            ? <p>Ruines</p>
                            : <p>Pas de ruine</p>
                    }
                    {
                        data[0].menace
                        
                            ? <p>Menaces</p>
                            : <p>Pas de menace</p>
                    }
                    {
                        data[0].artifact
                        
                            ? <p>Artefacts</p>
                            : <p>Pas d'artefact</p>
                    }
                </Card.Content> */}
                </Card>
        </div>
    )
}

Environment.getInitialProps = async () => {
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
    let randomMenace = Math.floor(Math.random() * 99);
    // get environment
    const resEnvironment = await fetch('http://localhost:3000/api/mutant/environment');
    const dataEnvironment = await resEnvironment.json();
    // get ruin
    const resRuin = await fetch('http://localhost:3000/api/mutant/ruin');
    const dataRuin = await resRuin.json();
    // get gangrene
    let randomPropGangrene = 0;
    const resGangrene = await fetch('http://localhost:3000/api/mutant/gangrene');
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
    const resMenace = await fetch('http://localhost:3000/api/mutant/menace');
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
        const resHumanoides = await fetch('http://localhost:3000/api/mutant/humanoide');
        const dataHumanoides = await resHumanoides.json();
        for (let i = 0; i < menacesArray['humanoides']; i++) {
            let randomNumber = Math.floor(Math.random() * 15);
            dataMenaceArray.push(dataHumanoides[randomNumber]);
        }

        
    } if (menacesArray['monsters'] > 0) {
        // take monsters 24
        const resMonsters = await fetch('http://localhost:3000/api/mutant/monster');
        const dataMonsters = await resMonsters.json();
        for (let i = 0; i < menacesArray['monsters']; i++) {
            let randomNumber = Math.floor(Math.random() * 24);
            dataMenaceArray.push(dataMonsters[randomNumber]);
        }
        
    } if (menacesArray['phenomenons'] > 0) {
         // take pheniomenon 19
         const resPhenomenons = await fetch('http://localhost:3000/api/mutant/phenomenon');
        const dataPhenomenons = await resPhenomenons.json();
        for (let i = 0; i < menacesArray['phenomenons']; i++) {
            let randomNumber = Math.floor(Math.random() * 19);
            dataMenaceArray.push(dataPhenomenons[randomNumber]);
        }
        
    }
    
    console.log(dataMenaceArray);
    
        

    // get the menace by type
    // TODO -- Tirer au hazard les différentes sortes de menace en fonction des type de menaces possible puis faire de même pour les artefacts
  
    

    // push all datas in array
    dataArray.push(dataEnvironment[randomEnvironment])
    dataArray.push(dataRuin[randomRuin])
    dataArray.push(dataGangrene[randomPropGangrene])
    dataArray.push(dataMenace[randomPropMenace])
    dataArray.push(menaceAndArtifactNumberArray);
    dataArray.push(dataMenaceArray);
    
    return dataArray;
    
  }


export default Environment;