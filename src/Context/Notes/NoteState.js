import React , { useState } from 'react'

import NoteContext from './noteContext'

const NoteState =(props) =>{
    
    const stat = {
        "name": "Harsh",
        "class": "5b"
    }

    const [state, setstate] = useState(stat);

    const update = () =>{
        setTimeout(()=>{
            setstate({
                "name":"Harshit",
                "class":"12b"
            })
        },1000);
    }
    



    return(
        // below : {state, update} is same as {state:state, update:update}
        <NoteContext.Provider value={{state, update}}>   
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;