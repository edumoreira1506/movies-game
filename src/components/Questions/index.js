import React from 'react';
import Question from '../Question';
import Box from '@material-ui/core/Box';

const Questions = ({
  quizzes,
  handleChangeCheck
}) => (
  <div className="Questions">
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="auto"
      flexDirection="column"
    >
      {
        quizzes.map((item, index) => (
          <Question
            key={`${item.sentence}-${index}`}
            sentence={item.sentence}
            options={item.options}
            handleChangeCheck={answer => handleChangeCheck(index, answer)}
          />
        ))
      }
    </Box>
  </div>  
);

export default Questions;
