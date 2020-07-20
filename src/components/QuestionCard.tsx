import React from 'react';
import { questionPropsType } from './../Types/quiz_types'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '../App.css'
const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    return (
        <div className="question-container">
              <Paper elevation={1} className="container">
            <div className="question">
                <h4>{question}</h4>
            </div>
           
            <form onSubmit={callback}>
               
                {
                    options.map((opt: string, ind: number) => {
                        return (
                       
                            <div key={ind}>
                       
                                <label>
                                    <input
                                    
                                        type="Radio"
                                        name="opt"
                                        value={opt}
                                        required
                                        
                                    />
                                    {opt}
                                </label>
                               
                            </div>
                           
                        )
                    })
                }
                <Button variant="contained" color="secondary" type="submit">Submit</Button>
                
            </form>
            </Paper>
        </div>
    
    )
}

export default QuestionCard;