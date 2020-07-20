import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service';
import { QuizType } from './quiz_types';
import QuestionCard from './QuestionCard';
import Progress from './Progress'
import Navbar from './Navbar'

function App() {

  let [quiz, setQuiz] = useState<QuizType[]>([])
  let [currentStep, setCurrentStep] = useState(0)


  useEffect(() => {
    async function fetchData() {
      const questions: QuizType[] = await getQuizDetails(5, 'easy');
      setQuiz(questions)
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      alert("QuestionType Completed");
      setCurrentStep(0);
    }
  }

  if (!quiz.length)
    return <Progress/>

  return (
    <div className="App">
      <Navbar/>
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
