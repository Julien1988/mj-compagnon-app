import Link from 'next/link'
import {useState} from 'react'
import { Loader } from 'semantic-ui-react'

const PnjGenerator = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [randomPnj, setRandomPnj] = useState(data)
    console.log(randomPnj["page"]);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    return (
        <div className='container main-container'>
            <h1>Générez un PNJ</h1>
            {
                isSubmitting
                    ? <Loader active inline="centered"/>
                    :   <ul className="list-container">
                            <li className="list">
                            <Link href="/mutant/pnj-generator/caid">
                                <a onClick={handleSubmit} className="list-link">Générer un Caïd</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/chronicle">
                                <a onClick={handleSubmit} className="list-link">Générer un Chroniqueur</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/combinard">
                                <a onClick={handleSubmit} className="list-link">Générer un Combinard</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/slave">
                                <a onClick={handleSubmit} className="list-link">Générer un Esclave</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/smasher">
                                <a onClick={handleSubmit} className="list-link">Générer un Fracasseur</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/dog-trainer">
                                <a onClick={handleSubmit} className="list-link">Générer un Maître-chien</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/handyman">
                                <a onClick={handleSubmit} className="list-link">Générer un Rafistoleur</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href="/mutant/pnj-generator/zonard">
                                <a onClick={handleSubmit} className="list-link">Générer un Zonard</a>
                            </Link>
                        </li>
                        <li className="list">
                            <Link href={`/mutant/pnj-generator/${randomPnj["page"]}`}>
                                <a onClick={handleSubmit} className="list-link">Générer un PNJ au hasard</a>
                            </Link>
                        </li>
                        </ul>
            }
            
      </div>
    )
}

PnjGenerator.getInitialProps = async () => {

    let randomPnjPage;

    const pnjPages = [
        'caid',
        'chronicle',
        'combinard',
        'slave',
        'smasher',
        'dog-trainer',
        'handyman',
        'zonard'
    ]

    const test = {
        0: {
            page: "caid",
            },
        1: {
            page: "chronicle",
        },
        2: {
            page: "combinard",
        },
        3: {
            page: "slave",
        },
        4: {
            page: "smasher",
        },
        5: {
            page: "dog-trainer",
        },
        6: {
            page: "handyman",
        },
        7: {
            page: "zonard",
            },
    }
    
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }
    
    const randomHandleSubmit = () => {
        //randomPnjPage = pnjPages[getRandomInt(8)];
        randomPnjPage = test[getRandomInt(8)];
    }
    randomHandleSubmit()

    return randomPnjPage
    
}







export default PnjGenerator;