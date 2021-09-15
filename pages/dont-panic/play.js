import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Loader, Card, Button } from 'semantic-ui-react'
import { CONST_URL } from './../../constants';

const Play = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [diceResult, setDiceResult] = useState("Lancer les dés")
    const [isDiceSubmitting, setIsDiceSubmitting] = useState(false)
    const [rulesContent, setRulesContent] = useState('');
    const [firstDice, setFirstDice] = useState();
    const [secondDice, setSecondDice] = useState();

     // utils fonct
     const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
     }
    let getFirstDice;
    let getSecondDice;
    const dicesSubmit = () => {
        
        getFirstDice = Math.round(getRandomArbitrary(1, 6))
        setFirstDice(getFirstDice)
        getSecondDice = Math.round(getRandomArbitrary(1, 6))
        setSecondDice(getSecondDice)
        setDiceResult(getFirstDice + getSecondDice);
        
        
    }

    useEffect(() => {
        if (diceResult != "Lancer les dés") {
            if (diceResult < 7 && firstDice != secondDice) {
                setRulesContent("lea joueureuse raconte comment la situation dérape.")
            
            } else if (diceResult >= 7 && firstDice != secondDice) {
                setRulesContent("lea joueureuse raconte comment la situation est à l’avantage de son personnage.")
               
            } else {

                setDiceResult("DOUBLE !!!" + firstDice + " " + secondDice)
                setRulesContent("iel doit aussi clore la scène (qu’elle se finisse bien ou non)")
            }
        }
        setIsDiceSubmitting(true)
    }, [dicesSubmit])
    
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    useEffect(() => {
        setIsSubmitting(false)
      
    }, [data]);
    
  
    return (
        <div className='container main-container'>
            <h1>Don't Panic</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    : <div className="main-container__content">
                         <Card>
                            <Card.Content>
                                <Card.Header>
                                    
                                    <div>
                                    <p>Scénario :</p>
                                    <p className='little-margin-bottom'>{data[0]} - {data[1] }</p>
                                    </div>
                                        
                                </Card.Header>
                                
                                <div className='little-margin-bottom'>
                                    <p className='little-margin-bottom'>Casting : Chacun.e décrit rapidement son personnage : nom, occupation, personnalité, quel.le acteurice joue son rôle… et tout ce qui vous semblera pertinent pour que chacun.e puisse se l’imaginer pendant la partie.</p>
                                </div>
                                <Card.Header>
                                <div>
                                        <Button onClick={dicesSubmit} className='little-margin-bottom'>{diceResult}</Button>
                                </div>
                                </Card.Header>
                                {isDiceSubmitting
                                ?  <div className='little-margin-bottom'>
                                        <div className='little-margin-bottom'>
                                            <p>{ rulesContent }</p>
                                        </div>
                                    </div>
                                :   <div className='little-margin-bottom'>
                                     
                                    </div>
                                }
                               
                               
                                    
                                </Card.Content>     
                            </Card>
                        <ul className="list-container">
                            <li className="list">
                             <p className="list list-color">Ce jeu est une création originale de Jentey Guillaume</p>   
                            </li>
                            <li className="list">
                            <Link href="/dont-panic/play">
                                <a onClick={handleSubmit} className="list-link">Nouvelle partie</a>
                            </Link>
                            </li>
                            <li className="list">
                                <Link href="https://guillaumejentey.itch.io/dont-panic-englishfrancais">
                                    <a onClick={handleSubmit} className="list-link">Voir la page officiel du jeu</a>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
            }
            
      </div>
    )
}
Play.getInitialProps = async () => {
    // utils fonct
    const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
    }
    // data array to return
    let dataArray = [];
    

    // Api scenarios 
    const resScenarios = await fetch(CONST_URL+'/api/dont-panic/scenarios');
    const dataScenarios = await resScenarios.json();

    // get number of scenarios
    const scenariosNumber = Object.keys(dataScenarios).length - 1
    // take a random scenario
    const getRandomScenarioDice = Math.round(getRandomArbitrary(0, scenariosNumber));
   
    const getRandomScenario = dataScenarios[getRandomScenarioDice];

    // get scenario theme
    const scenarioTheme = getRandomScenario.theme;

    // get number of events 
    const getEventsNumber = getRandomScenario.event.length - 1
    // take a random event
    const getRandomEventDice = Math.round(getRandomArbitrary(0, getEventsNumber));
    // get event
    const getRandomEvent = getRandomScenario.event[getRandomEventDice]
    
    

    dataArray.push(scenarioTheme, getRandomEvent)



  
    return dataArray

}

export default Play;