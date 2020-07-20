import React from 'react';
import { questionPropsType } from './../Types/quiz_types'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'
const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    return (
        <div className="question-container">
            <div className="question">
                <h4>{question}</h4>
            </div>

            <FormControl onSubmit={callback}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <FormLabel>
                                    <input
                                    
                                        type="Radio"
                                        name="opt"
                                        value={opt}
                                    />
                                    {opt}
                                </FormLabel>
                            </div>
                        )
                    })
                }
                <input type="submit" />
            </FormControl>
        </div>
    )
}

export default QuestionCard;