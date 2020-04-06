import React, { useContext } from 'react';
import { QuizzesContext } from '../../contexts/quizzes';
import { Box, Button } from '@material-ui/core';
import Questions from '../../components/Questions';
import Loading from '../../components/Loading';
import Ranking from '../../components/Ranking';

const Main = () => {
  const {
    started,
    handleStartGame,
    quizzes,
    handleChangeCheck,
    handleFinishGame,
    loading,
    toggleRanking,
    showRanking,
    handleSelectCategory,
    categories
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
        justifyContent="space-around"
        flexDirection="column"
        width="100vw"
        height="100vh"
      >
        <Button
          variant="contained"
          onClick={handleStartGame}
          color="primary"
          disabled={started}
        >
          Jogar com todos temas
        </Button>
        {
          categories.map(category => (
            <Button
              variant="contained"
              onClick={() => handleSelectCategory(category)}
              color="primary"
              disabled={started}
              key={category.id}
            >
              { category.name }
            </Button>
          ))
        }
        <Button
          variant="contained"
          onClick={toggleRanking}
          color="primary"
        >
          Ranking
        </Button>
      </Box>
      {
        showRanking && (
          <Ranking onClose={toggleRanking} />
        )
      }
    </>
  );
};

export default Main;
