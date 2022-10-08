import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import About from './Components/About/About';
import NoteState from './Context/Notes/NoteState';



// During this prokect formation ,We install concurrently to start multiple servers using one terminal , otherise we have to start multiple server using mulriple terminals 

function App() {
  return (

    <NoteState>

      <BrowserRouter>
        
        <Navbar/>
        
        <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/about" element={<About/>}/>         
        </Routes>
      
      </BrowserRouter> 
    
    </NoteState>    
    
  );
}

export default App;
