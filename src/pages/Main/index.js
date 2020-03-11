import React, { useContext } from 'react';
import { QuizzesContext } from '../../contexts/quizzes';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Questions from '../../components/Questions';

const Main = () => {
  const {
    started,
    handleStartGame,
    quizzes,
    handleChangeCheck
  } = useContext(QuizzesContext);

  return (
    started ? (
      <Questions
        quizzes={quizzes}
        handleChangeCheck={handleChangeCheck}
      />
    ) : (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100vw"
        height="100vh"
      >
        <Button variant="contained" onClick={handleStartGame} color="primary">
          Começar!
        </Button>
      </Box>
    )
  );
};

export default Main;
