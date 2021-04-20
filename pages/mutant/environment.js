import Link from 'next/link';
import {Card} from 'semantic-ui-react'

const Environment = (data) => {
    console.log(data)
    return (
        <div className="container">
            <h1>environment</h1>
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

    // get random environment
    let dataArray = [];
    let randomEnvironment = Math.floor(Math.random() * 13);
    let randomRuin = Math.floor(Math.random() * 47);
    const resEnvironment = await fetch('http://localhost:3000/api/mutant/environment');
    const dataEnvironment = await resEnvironment.json();
    const resRuin = await fetch('http://localhost:3000/api/mutant/ruin');
    const dataRuin = await resRuin.json();
    dataArray.push(dataEnvironment[randomEnvironment])
    dataArray.push(dataRuin[randomRuin])
    return dataArray;
    
  }


export default Environment;