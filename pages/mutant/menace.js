import Link from 'next/link'
import {useState} from 'react'
import { Loader } from 'semantic-ui-react'

const Menace = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
        setIsSubmitting(true);
    }
    return (
        <div className='container main-container'>
          <h1>Menace</h1>
            
      </div>
    )
}

export default Menace;