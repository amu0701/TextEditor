import './App.css';
import Navbar from './Navbar';
import TextArea from './TextArea';
import Alert from './Alert';
import { useState } from 'react';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  const [alert , setAlert] = useState(null);

  const showAlert = (massage , type)=>{
    setAlert({
      msg : massage,
      type : type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
    

    
    <Navbar title="TextEditor" home="Home" />
    <Alert alert={alert}/>
    <div className='text my-3 mb-5'>
      

    <TextArea showAlert={showAlert} heading="Enter The Text Here" />


    </div>
    
    </>
  );
}

export default App;

