import React,{useEffect} from 'react';
import {getQuizDetails} from './quiz_services';

import './App.css';

function App() {
  useEffect(() => {
    
   getQuizDetails(5,'easy');
  }, []);

  return (
    <div className="App">
     
      
  
    </div>
  );
}

export default App;
