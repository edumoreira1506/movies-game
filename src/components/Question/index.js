import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import './index.scss';

const Question = ({
  sentence,
  options,
  handleChangeCheck
}) => (
  <div className="Question">
    <h2 className="Question__title">
      { sentence }
    </h2>
    <FormControl component="fieldset">
      <RadioGroup>
        {
          options.map((option, index) => (
            <FormControlLabel
              key={`${option.answer}-${index}`}
              value={option.answer}
              label={option.answer}
              control={<Radio />}
              checked={option.checked}
              onChange={() => handleChangeCheck(option.answer)}
              disabled={option.disabled}
            />
          ))
        }
      </RadioGroup>
    </FormControl>
  </div>
);

export default Question;
