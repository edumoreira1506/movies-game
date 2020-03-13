import React, { useContext } from 'react';
import { QuizzesContext } from '../../contexts/quizzes';
import { Box, Button } from '@material-ui/core';
import Questions from '../../components/Questions';
import Loading from '../../components/Loading';

const Main = () => {
  const {
    started,
    handleStartGame,
    quizzes,
    handleChangeCheck,
    handleFinishGame,
    loading
  } = useContext(QuizzesContext);

  if (loading) return <Loading />

  return (
    <>
      <Questions
        quizzes={quizzes}
        handleChangeCheck={handleChangeCheck}
        handleFinishGame={handleFinishGame}
        started={started}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100vw"
        height="auto"
        margin="10px 0"
      >
        <Button
          variant="contained"
          onClick={handleStartGame}
          color="primary"
          disabled={started}
        >
          Começar!
        </Button>
      </Box>
    </>
  );
};

export default Main;
