
import {Quiz} from './../types/quiz_types';

export const shuffleArray=(array: any[])=>
[...array].sort(()=> Math.random() - 0.5)
export const  getQuizDetails=async (totalQuestions: number,level: string):Promise<Quiz[]>=>{
 const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let  {results} = await res.json();
    const quiz = results.map((questionObj:Quiz,ind: number)=>
    {
return{
    question:questionObj,
    answer:questionObj.correct_answer,
    Option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
}

    })
    return quiz;
}