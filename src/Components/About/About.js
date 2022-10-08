import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../../Context/Notes/noteContext'

const About = () => {
    
    const a = useContext(noteContext);
    
    useEffect(() => {
      
        a.update();

    }, [])
    

    return (
    <div>
        <h1>About {a.state.name} </h1> 
    </div>
  )

}

export default About