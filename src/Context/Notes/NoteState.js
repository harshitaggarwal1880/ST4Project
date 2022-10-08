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
    

    const state = [
      {
        "_id": "633f0c5e44f983dc3df038bd",
        "user": "633d34491977fb2b46612900",
        "title": "Second Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-06T17:11:58.310Z",
        "__v": 0
      },
      {
        "_id": "634017116cc8a7f3782930c9",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-07T12:09:53.832Z",
        "__v": 0
      },
      {
        "_id": "6341999f5637b2c5bf7bca99",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-08T15:39:11.890Z",
        "__v": 0
      },
      {
        "_id": "634199a15637b2c5bf7bca9b",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-08T15:39:13.114Z",
        "__v": 0
      },
      {
        "_id": "634199a25637b2c5bf7bca9d",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-08T15:39:14.409Z",
        "__v": 0
      },
      {
        "_id": "634199a35637b2c5bf7bca9f",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-08T15:39:15.224Z",
        "__v": 0
      },
      {
        "_id": "634199a45637b2c5bf7bcaa1",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-08T15:39:16.009Z",
        "__v": 0
      },
      {
        "_id": "634199a45637b2c5bf7bcaa3",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-08T15:39:16.663Z",
        "__v": 0
      },
      {
        "_id": "634199a55637b2c5bf7bcaa5",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-08T15:39:17.351Z",
        "__v": 0
      },
      {
        "_id": "634199a65637b2c5bf7bcaa7",
        "user": "633d34491977fb2b46612900",
        "title": "Third Note",
        "description": "This is the Description of the Note",
        "tag": "First",
        "date": "2022-10-08T15:39:18.116Z",
        "__v": 0
      }
    ]

    const [notes, setNotes] = useState(state);

    const addnote =(title, description, tag) =>{

      // call the API to add a note and get a new note With id and detais
      // let note = null;

      console.log("Adding a new Note");

      const note = {
        "_id": "634199a65637b2c5bf7bcaa7",
        "user": "633d34491977fb2b46612900",
        "title": title,
        "description": description,
        "tag": tag,
        "date":  "2022-10-08T15:39:18.116Z",
        "__v": 0
      }

      setNotes(notes.concat(note));
    }
    

    // Delete a Note
    const deletenote =(id)=>{

    }

    // Edit a Note
    const editnote =(id)=>{

    }


    return(
        // below : {state, update} is same as {state:state, update:update}
        <NoteContext.Provider value={{notes,addnote,deletenote,editnote}}>   
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;