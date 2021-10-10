import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Card, Loader } from 'semantic-ui-react'
import {CONST_URL} from '../../constants';

const MeetingInWilderness = (data) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
       useEffect(() => {
        setIsSubmitting(false)
      
    },[data]);
    return (
        <div className='container main-container'>
          <h1>En sortant de la route, après une demi-journée de trajet,</h1>
          {
               isSubmitting
                    ? <Loader active inline="centered"/>
                    :    <div className="main-container__content">
                          
                            <Card>
                                {
                                    <Card.Content>
                                        <Card.Header>
                                        <p>vous rencontrez:</p>
                                        </Card.Header>
                                    <p>{ data.meeting_in_wilderness }</p>
                                    </Card.Content>
                                }
                            </Card>

                            <ul className="list-container">
                                <li className="list">
                                    <Link href="/mork-borg/meeting-in-wilderness">
                                        <a onClick={handleSubmit} className="list-link">Générer un autre rencontre sauvage</a>
                                    </Link>
                            </li>
                            <li className="list">
                                    <Link href="/mork-borg">
                                        <a onClick={handleSubmit} className="list-link">Page précédente</a>
                                    </Link>
                                 </li>
                            </ul>
                        </div>
          }
            
      </div>
    )
}

MeetingInWilderness.getInitialProps = async () => {
    //get random randomMeetingInWilderness
    let getProbabilityDice = Math.floor(Math.random() * 12);

    const resMeetingInWilderness = await fetch(CONST_URL+'/api/mork-borg/meeting-in-wilderness');
    const dataMeetingInWilderness = await resMeetingInWilderness.json();
    let randomMeetingInWilderness = dataMeetingInWilderness[getProbabilityDice];
    return randomMeetingInWilderness;

}

export default MeetingInWilderness;