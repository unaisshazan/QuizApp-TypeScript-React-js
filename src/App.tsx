import React,{useEffect,useState} from 'react';
import {getQuizDetails} from './quiz_services';
import QuestionCard from './components/QuestionCard';
import './App.css';
import { QuestionType } from './types/quiz_types';

function App() {
  let [quiz,setQuize]=useState<QuestionType[]>([])
  useEffect(() => {
    
 async function fetchData(){
   const questions:QuestionType[]= await getQuizDetails(5,'easy'); 
   console.log(questions);
   setQuize(questions)
 }
 fetchData();
  }, []);

  return (
    <div className="App">
        <QuestionCard
        options={quiz[0].option:string[]}
        question={}
        
        
        />
  
    </div>
  );
}

export default App;
