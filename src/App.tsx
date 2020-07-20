import React,{useEffect} from 'react';
import {getQuizDetails} from './quiz_services';

import './App.css';

function App() {
  useEffect(() => {
    
 async function fetchData(){
   const questions= await getQuizDetails(5,'easy'); 
 }
  }, []);

  return (
    <div className="App">
     
      
  
    </div>
  );
}

export default App;
