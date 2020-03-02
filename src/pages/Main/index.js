import React, { useContext } from 'react';
import { QuizzesContext } from '../../contexts/quizzes';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Main = () => {
  const { started, handleStartGame, quizzes } = useContext(QuizzesContext);

  return (
    started ? (
      <h1>Começou!</h1>
    ) : (
      <Box display="flex" alignItems="center" justifyContent="center" width="100vw" height="100vh">
        <Button  variant="contained" onClick={handleStartGame} color="primary">
          Começar!
        </Button>
      </Box>
    )
  );
};

export default Main;
