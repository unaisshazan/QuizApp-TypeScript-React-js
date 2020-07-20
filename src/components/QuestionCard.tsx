import React from 'react';
import { questionPropsType } from './../Types/quiz_types'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    return (
        <div className="question-container">
            <div className="question">
                <h4>{question}</h4>
            </div>

            <form onSubmit={callback}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <Paper elevation={1}>
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
                            </Paper>
                        )
                    })
                }
                <Button variant="contained" color="secondary" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default QuestionCard;