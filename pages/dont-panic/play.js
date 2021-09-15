import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Loader, Card } from 'semantic-ui-react'
import { CONST_URL } from './../../constants';

const Play = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    useEffect(() => {
        setIsSubmitting(false)
      
    }, [data]);
    console.log(data)
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
                                    <p>Scénario</p>
                                        
                                </Card.Header> 
                                    <div>
                                    <p className='little-margin-bottom'>{data[0]} - {data[1] }</p>
                                    </div>
                                    
                            
                                    
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