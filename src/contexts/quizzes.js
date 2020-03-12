import React, { createContext, useState } from 'react';
import * as Quizzes from '../models/Quizzes';

export const QuizzesContext = createContext();

export const QuizzesProvider = ({ children }) => {
  const [ quizzes, setQuizzes ] = useState([]);
  const [ started, setStarted ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const handleStartGame = () => {
    setLoading(true);

    const setupCallback = quizzesApi => {
      setQuizzes(quizzesApi);
      setStarted(true);
      setLoading(false);
    }

    setQuizzes(Quizzes.setup(setupCallback));
  }

  const handleChangeCheck = (quizzIndex, answer) => {
    const newQuizzes = Quizzes.updateOption(quizzes, quizzIndex, answer);

    setQuizzes(newQuizzes);
  }

  const handleFinishGame = () => {
    const { quizzes: newQuizzes, points } = Quizzes.finishGame(quizzes);

    alert(`Você acertou ${points} de ${newQuizzes.length} perguntas.`);

    setStarted(false);
    setQuizzes(newQuizzes);
  }

  const store = {
    quizzes, started,
    handleStartGame, handleChangeCheck,
    handleFinishGame, loading
  };

  return (
    <QuizzesContext.Provider value={store}>
      { children }
    </QuizzesContext.Provider>
  )
}
