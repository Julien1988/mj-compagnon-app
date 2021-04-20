import Link from 'next/link';
import {Card} from 'semantic-ui-react'

const Environment = (data) => {
    console.log(data)
    return (
        <div className="container">
            <h1>environment</h1>
            <Card>
                <Card.Content>
                    <Card.Header>
                    <p>{data.environment}</p>
                    </Card.Header>
                    {
                        data.ruin
                        
                            ? <p>Ruines</p>
                            : <p>Pas de ruine</p>
                    }
                    {
                        data.menace
                        
                            ? <p>Menaces</p>
                            : <p>Pas de menace</p>
                    }
                    {
                        data.artifact
                        
                            ? <p>Artefacts</p>
                            : <p>Pas d'artefact</p>
                    }
                </Card.Content>
                </Card>
        </div>
    )
}

Environment.getInitialProps = async () => {
    let randomNumber = Math.floor(Math.random() * 13);
    const res = await fetch('http://localhost:3000/api/mutant/environment');
    const data = await res.json();
    console.log(data)
    return data[randomNumber] 
  }


export default Environment;