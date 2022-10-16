import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import About from './Components/About/About';
import NoteState from './Context/Notes/NoteState';
import Notes from './Components/Notes/Notes';
import AddNotes from './Components/AdddNotes/AddNotes';
import Alert from './Components/Alert/Alert';
// import AddNote from './Components/AddNote/AddNote';
// import Login from './Components/Login/Login';

import LoginSec from './Components/Login/LoginSec';
// import Signup from './Components/Signup/Signup';
import SignupOne from './Components/Signup/SignupOne';
import { useState } from 'react';


// During this prokect formation ,We install concurrently to start multiple servers using one terminal , otherise we have to start multiple server using mulriple terminals 

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (text , type) =>{
      setAlert({
          msg: text, 
          type: type
      })
      
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }


  return (

    <NoteState>

      <BrowserRouter>
        
        <div className="sticky-top">
        <Navbar/>

        </div>
        <Alert alert={alert}/> 
        
        <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />}/> 
            <Route exact path="/about" element={<About/>}/>         
            <Route exact path="/notes"  element={<Notes key="notes-real" showAlert={showAlert} />}/>         
            <Route exact path="/addnotes"  element={<AddNotes key="notes" showAlert={showAlert} />}/>         
            <Route exact path="/login"  element={<LoginSec showAlert={showAlert} />}/>         
            <Route exact path="/signup" element={<SignupOne showAlert={showAlert} />}/>         
        </Routes>
      
      </BrowserRouter> 
    
    </NoteState>    
    
  );
}

export default App;
