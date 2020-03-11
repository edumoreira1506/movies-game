import React from 'react';
import Question from '../Question';
import Box from '@material-ui/core/Box';

const Questions = ({
  quizzes
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
        quizzes.map(item => (
          <Question
            key={item}
            sentence={item.sentence}
            options={item.options}
          />
        ))
      }
    </Box>
  </div>  
);

export default Questions;
