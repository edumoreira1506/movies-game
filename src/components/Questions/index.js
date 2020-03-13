import React from 'react';
import Question from '../Question';
import { Button, Box } from '@material-ui/core';

const Questions = ({
  quizzes,
  handleChangeCheck,
  handleFinishGame,
  started
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
            finished={!started}
          />
        ))
      }
      {
        started && (
          <Box marginTop="30px" marginBottom="30px">
            <Button variant="contained" onClick={handleFinishGame} color="primary">
              Checar respostas
            </Button>
          </Box>   
        )
      }
    </Box>
  </div>  
);

export default Questions;
