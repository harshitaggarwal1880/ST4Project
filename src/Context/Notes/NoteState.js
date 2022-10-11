import React , { useState } from 'react'
import NoteContext from './noteContext'

const NoteState =(props) =>{
    
    // const stat = {
    //     "name": "Harsh",
    //     "class": "5b"
    // }

    // const [state, setstate] = useState(stat);

    // const update = () =>{
    //     setTimeout(()=>{
    //         setstate({
    //             "name":"Harshit",
    //             "class":"12b"
    //         })
    //     },1000);
    // }
    
    const host = "http://localhost:5000"

    const state =[];

   
    const [notes, setNotes] = useState(state);


    
    const getnotes = async ()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        
      });
      const json = await response.json()
       console.log(json)
      setNotes(json)
    }

    const addnote = async(title, description, tag) =>{

      // call the API to add a note and get a new note With id and detais
      
      // call an API 
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({title, description,tag})
      });
      const json = await response.json()
      console.log(json)    


      // console.log("Adding a new Note");

      const note = json;

      setNotes(notes.concat(note)); 
    }
    

    // Delete a Note
    const deletenote = async (id)=>{

      // console.log(id)
      // call an API 
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        
      });
      const json = await response.json()
      console.log(json)


      // console.log(id)
      const newnotes = notes.filter((note)=>{
        return note._id!==id;
      })
      setNotes(newnotes);
    }

    // Edit a Note
    const editnote = async (id,title,description,tag)=>{
      
      // call an API 
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title, description,tag})
        
      });
      const json = await  response.json()
      console.log(json)

      // we also update notes by directly call another api call getnotes , but it will make many api calls on server , thats why we handel set notes in js
      // getnotes();



      // we can not change any part of state directly, we have to change full state, so we have to make another newnote object , then update in newnote object, then use setstate to chenge note object with newnote object

      let newNotes = JSON.parse(JSON.stringify(notes))  // create a new copy of notes object

      // Logic to edit in client
      for(let x = 0; x<notes.length;x++){
        const element = notes[x];
        if(element._id === id){
          newNotes[x].title = title;
          newNotes[x].description = description; 
          newNotes[x].tag = tag;
          break;
        }
      }

      setNotes(newNotes);

      

    }

    

    return(
        // below : {state, update} is same as {state:state, update:update}
        <NoteContext.Provider value={{notes,addnote,deletenote,editnote,getnotes}}>   
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;