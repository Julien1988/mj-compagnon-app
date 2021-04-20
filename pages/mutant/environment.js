import Link from 'next/link';
import {Card} from 'semantic-ui-react'

const Environment = () => {
    
    return (
        <div className="container">
            <h1>environment</h1>
            <Card>
                <Card.Content>
                    <Card.Header>
                    <p>Card Header</p>
                    </Card.Header>
                    <p>CONTENT</p>
                </Card.Content>
                
                </Card>
        </div>
    )
}

Environment.getInitialProps = async () => {
   const res = await fetch('http://localhost:3000/api/hello');
    const { name } = await res.json();
  
    console.log(name)
    return name 

  }


export default Environment;