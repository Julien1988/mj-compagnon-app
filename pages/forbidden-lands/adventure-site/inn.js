import Link from 'next/link'
import {useState} from 'react'
import { Loader } from 'semantic-ui-react'
import { CONST_URL } from '../../../constants';

const Inn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    return (
        <div className='container main-container'>
            <h1>Générateur d'auberge</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    :   <ul className="list-container">
                            <li className="list">
                            <Link href="/forbidden-lands/adventure-site/inn">
                                <a onClick={handleSubmit} className="list-link">Générer une autre auberge</a>
                            </Link>
                            </li>
                            
                        </ul>
            }
            
      </div>
    )
}

Inn.getInitialProps = async () => {
    // utils fonct
    const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
    }
    // data array to return
    let dataArray = [];


    // Api inn name
    const resInNames = await fetch(CONST_URL+'/api/forbidden-lands/inn_name');
    const dataInNames = await resInNames.json();

    // get Inn name
    let innName;
    let getRandomDiceOne
    let getRandomDiceTwo
    const dubbleFirtName = Math.round(getRandomArbitrary(1, 2));
    let dubbleFirstNameBool;
        (dubbleFirtName == 1)
            ? dubbleFirstNameBool = true 
            : dubbleFirstNameBool = false
    
            switch (dubbleFirstNameBool) {
                case true:
                    // true
                    console.log("true")
                    getRandomDiceOne = Math.round(getRandomArbitrary(0, 35));
                    getRandomDiceTwo = Math.round(getRandomArbitrary(0, 35));
                    if (getRandomDiceOne == getRandomDiceTwo) {
                        innName = dataInNames[getRandomDiceOne].first_word + ' ' + dataInNames[getRandomDiceTwo].second_word;
                    }
                    innName = (dataInNames[getRandomDiceOne].first_word + ' et ' + dataInNames[getRandomDiceTwo].first_word);
                  break;
               
                default:
                    //false
                    console.log("false")
                    getRandomDiceOne = Math.round(getRandomArbitrary(0, 35));
                    getRandomDiceTwo = Math.round(getRandomArbitrary(0, 35));
                    innName = dataInNames[getRandomDiceOne].first_word + ' ' + dataInNames[getRandomDiceTwo].second_word;
                    
            }
    
    console.log(innName);
    
    
    //console.log(dataInNames[0].first_word)


  
    return dataArray

}

export default Inn;