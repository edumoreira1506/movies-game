import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import './index.scss';

const answerClass = (finished, correct) => 
  `
    Question__answer
    ${ finished && correct ? 'Question__answer--correct': '' }
  `;

const Question = ({
  sentence,
  options,
  handleChangeCheck,
  finished
}) => (
  <div className="Question">
    <h2 className="Question__title">
      { sentence }
    </h2>
    <FormControl component="fieldset">
      <RadioGroup>
        {
          options.map((option, index) => (
            <div
              className={answerClass(finished, option.correct)}
              key={`${option.answer}-${index}`}
            >
              <FormControlLabel
                value={option.answer}
                label={option.answer}
                control={<Radio />}
                checked={option.checked}
                onChange={() => handleChangeCheck(option.answer)}
                disabled={option.disabled}
              />
            </div>
          ))
        }
      </RadioGroup>
    </FormControl>
  </div>
);

export default Question;
