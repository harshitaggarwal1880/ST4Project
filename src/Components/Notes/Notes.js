import  React , { useContext } from 'react'
import noteContext from '../../Context/Notes/noteContext'
import AddNote from '../AddNote/AddNote';
import Noteitem from '../NoteItem/Noteitem';

const Notes = (props) => {
    const context = useContext(noteContext)

    const {notes} = context;

    

  return (
    <div className='container'>
    <AddNote/>
    <h1 className='heading'> Notes </h1>
    <div className='row'>
    
    {notes.map((note)=>{
        return <Noteitem key={note._id} title={note.title} description={note.description} tag={note.tag}/>;
    })}
    
    </div>
    </div>

    

  )
}

export default Notes