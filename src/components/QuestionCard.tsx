import React from 'react';
import { questionPropsType } from './../Types/quiz_types'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '../App.css'
const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    return (
        <div className="container">
              <Paper elevation={3} className="container">
            <div className="text-center">
                <h4>{question}</h4>
            </div>
           
            <form onSubmit={callback} className="text-center">
               
                {
                    options.map((opt: string, ind: number) => {
                        return (
                       
                            <div key={ind} className="text-center">
                       
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
                <Button style={{marginTop:'5%'}} variant="contained" color="secondary" type="submit">Submit</Button>
                
            </form>
            </Paper>
        </div>
    
    )
}

export default QuestionCard;