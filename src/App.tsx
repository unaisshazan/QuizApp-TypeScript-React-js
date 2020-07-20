import React,{useEffect,useState} from 'react';
import {getQuizDetails} from './quiz_services';
import QuestionCard from './components/QuestionCard';
import './App.css';
import { Quiz } from './types/quiz_types';

function App() {
  let [quiz,setQuize]=useState<Quiz[]>([])
  useEffect(() => {
    
 async function fetchData(){
   const questions:Quiz[]= await getQuizDetails(5,'easy'); 
   console.log(questions);
   setQuize(questions)
 }
 fetchData();
  }, []);

  return (
    <div className="App">
        <QuestionCard/>
  
    </div>
  );
}

export default App;
