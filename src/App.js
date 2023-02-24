import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import './App.css';
import Proptypes from 'prop-types'
import About from './components/About';
import React,{useState} from 'react'
import Alerts from './components/Alerts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  const[mode,setModee]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert = (massege,type)=>{
    setAlert({
      msg:massege,
      type:type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
  }

  const chngmode =() =>{
    if(mode === "light"){
      setModee('dark');
      document.body.style.backgroundColor="Black"
      document.body.style.color="white"
      document.getElementById("mybox").style.backgroundColor="black"
      document.getElementById("mybox").style.color="white"
      
      showAlert("dark mode has been enabled" ,"success");
      
    }
    else{
      setModee('light');
      document.body.style.backgroundColor="white"
      document.body.style.color="Black"
      document.getElementById("mybox").style.backgroundColor="white"
      document.getElementById("mybox").style.color="black"
      showAlert("light mode has been enabled" ,"primary");

    }
  }
  
  
    return ( 
        <>  
        <Router>
        <Navbar head="Text-Utills" mode={mode} chngmode={chngmode}/>
        <Alerts alert={alert}/>
           <Switch>
                <Route exact path="/">
                <Textarea  showAlert={showAlert}heading="Enter Your text" text="Enter Here"/>
                </Route>
                <Route exact path="/about">
                <About/>
                </Route>
          </Switch>
        </Router>
     </>
    );
}

Textarea.Proptype={
  heading:Proptypes.string,
  text:Proptypes.string
}
Textarea.defaultProps ={
  heading:"enter a haeding",
   text:"Enter text",
}
Navbar.Proptype={
  head:Proptypes.string,
}

export default App;