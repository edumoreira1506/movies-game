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
    started ? (
      <>
        <Questions
          quizzes={quizzes}
          handleChangeCheck={handleChangeCheck}
          handleFinishGame={handleFinishGame}
        />
      </>
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
