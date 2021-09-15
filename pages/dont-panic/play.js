import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Loader, Card, Button } from 'semantic-ui-react'
import { CONST_URL } from './../../constants';

const Play = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [diceResult, setDiceResult] = useState("Lancer les dés")
    const [isDiceSubmitting, setIsDiceSubmitting] = useState(false)
    // counter default 1O
    const [playCounter, setPlayCounter] = useState(10);
    const [counterOn, setCounterOn] = useState(true)
    const [gameIsOn, setGameIsOn] = useState(true)
    const [rulesContent, setRulesContent] = useState('');
    const [firstDice, setFirstDice] = useState(1);
    const [secondDice, setSecondDice] = useState(2);
    // dont panic end game
    const [isDontPanic, setIsDontPanic] = useState(false)

    // Test
    const [isCounterIsZero, setIsCounterIsZero] = useState(false)

    
     // utils fonct
     const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
     }
    let getFirstDice;
    let getSecondDice;
    const dicesSubmit = () => {
        if (isDontPanic != "DON'T PANIC !") {
            setCounterOn(true)
            getFirstDice = Math.round(getRandomArbitrary(1, 6))
            setFirstDice(getFirstDice)
            getSecondDice = Math.round(getRandomArbitrary(1, 6))
            setSecondDice(getSecondDice)
            setDiceResult(getFirstDice + getSecondDice);
        } 
       
    }

    const changeScene = () => {
        if (playCounter == 1) {
            setPlayCounter(0)
        } else {
            setPlayCounter(playCounter - 2)
            if (playCounter <= 0) {
                setPlayCounter(0);
            }
        }
        
    }

    useEffect(() => {
        
        if (diceResult != "Lancer les dés" && isDontPanic == false) {
            if (diceResult < 7 && firstDice != secondDice) {
                setRulesContent("lea joueureuse raconte comment la situation dérape.")
            
            } else if (diceResult >= 7 && firstDice != secondDice) {
                setRulesContent("lea joueureuse raconte comment la situation est à l’avantage de son personnage.")
               
            } else {
                setDiceResult("DOUBLE !!!" + firstDice + " " + secondDice)
                setRulesContent("iel doit aussi clore la scène (qu’elle se finisse bien ou non)")
                if (counterOn == true) {
                    setCounterOn(false)
                    setPlayCounter(playCounter - 1)
                    if (playCounter <= 0) {
                        setPlayCounter(0);
                    }

                }
               

                
            }
        }
        console.log(firstDice, secondDice)


        if (playCounter <= 0 && isCounterIsZero == false) {
            console.log("plus petit que ZERO")
           
            console.log(firstDice, secondDice)
            setIsCounterIsZero(true)
            setGameIsOn(false)
           
        } 

       
    }, [dicesSubmit])
    
    const handleSubmit = () => {
        setIsDontPanic(false)
        setGameIsOn(true);
        setIsSubmitting(true);
        setPlayCounter(10)
        setDiceResult("Lancer les dés")

    }

    const dicesSubmitEndGame = () => {
       let getFirstDiceEndGame = Math.round(getRandomArbitrary(1, 6))
        
        let getSecondDiceEndGame = Math.round(getRandomArbitrary(1, 6))
        
        if (getFirstDiceEndGame == getSecondDiceEndGame) {
           // setGameIsOn(false)
            setIsDontPanic(true)
        }
        
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
                        {
                            isDontPanic
                                ? <Card>
                                    <Card.Content>
                                        <Card.Header>
                                            <div className='little-margin-bottom'>
                                                <p>« DON’T PANIC !»</p>
                                            </div>
                                        </Card.Header>
                                            <div className='little-margin-bottom'>
                                                <p>Tout le monde se tait ! Cellui qui a crié « Don’t Panic ! » raconte comment son personnage a sauvé la situation, le monde, les fesses des autres, rien qu’ellui, tout.e seul.e, comme un.e vrai.e héro.ïne trop badass ! Ensuite chacun.e peut faire un petit épilogue pour son personnage, mais honnêtement ça ne sera jamais aussi fort que ce qu’il vient de se passer, vous feriez mieux de passer directement au générique !</p>
                                        </div>
                                        <Card.Header>
                                            <div className='little-margin-bottom'>
                                                <p>Générique</p>
                                            </div>
                                        </Card.Header>
                                        <div className='little-margin-bottom'>
                                                <p>Prenez un temps pour vous féliciter, pour vous dire ce qui vous a fait rire et à quel point il est bon de faire du jdr ensemble. Et surtout vérifiez qu’aucun.e joueureuse n’a été blessé.e pendant le tournage !</p>
                                        </div>
                                        <Card.Header>
                                            <div className='little-margin-bottom'>
                                                <p>Note de la production</p>
                                            </div>
                                        </Card.Header>
                                        <div className='little-margin-bottom'>
                                                <p>Si vous avez aimé le film, n’hésitez pas à aller voir nos autres productions : </p><a href="https://guillaumejentey.itch.io/">https://guillaumejentey.itch.io/</a>
                                            </div>
                                    </Card.Content>
                                </Card>
                                :  <Card>
                                     {
                                    gameIsOn
                                    ? <Card.Content>
                                        <Card.Header>
                                            
                                            <div>
                                            
                                            <p className='little-margin-bottom'> Compteur : {playCounter}</p>
                                            </div>
                                                
                                        </Card.Header>
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
                                        {
                                                        isCounterIsZero
                                                            ?   <div className="button-center">
                                                                <Button onClick={dicesSubmitEndGame} className='little-margin-bottom button-color-3'>Continue</Button>
                                                                </div>
                                                            :   <div className="button-center">
                                                                <Button onClick={dicesSubmit} className='little-margin-bottom button-color-3'>{diceResult}</Button>
                                                                </div>
                                                    }
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
                                                <div className="button-center">
                                                       
                                                        <Button onClick={changeScene} className='little-margin-bottom button-color-2'>Passer à la scène suivante</Button>
                                        </div>
                                        </Card.Content>     
                                
                                    : <Card.Content>
                                            <Card.Header>
                                                <div className='little-margin-bottom'>
                                                    <p>CLIMAX</p>
                                                </div>
                                            
                                            </Card.Header>
                                            <div className='little-margin-bottom'>
                                            <p>Quand il n’y a plus de jeton au centre de la table : c’est le point dramatiquement culminant du film ! Tou.tes en même temps, les joueureuses racontent comment tout va trop mal ! On essaie de s’écouter et de rebondir les un.es sur les autres, mais il n’y a pas d’ordre : c’est le chaos, la fin du monde, le petit orteil sur le coin du pied de chaise ! Tout en racontant comment tout part en quenouille, chacun.e jette frénétiquement ses 2d6 ! Lea premier.e à obtenir un double 6 crie :</p>
                                            </div>
                                            <Card.Header>
                                            <div className="button-center">
                                                <Button onClick={dicesSubmitEndGame} className='little-margin-bottom button-color-3'>Continue</Button>
                                            </div>
                                            
                                            </Card.Header>
                                    </Card.Content>
                                 }
                                 </Card>
                        }
                       
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
                                    <a onClick={handleSubmit} className="list-link">Voir la page officielle du jeu</a>
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