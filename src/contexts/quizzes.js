import React, { createContext, useState } from 'react';
import * as Quizzes from '../models/Quizzes';

export const QuizzesContext = createContext();

export const QuizzesProvider = ({ children }) => {
  const [ quizzes, setQuizzes ] = useState([]);
  const [ started, setStarted ] = useState(false);

  const handleStartGame = () => {
    setStarted(true);
    setQuizzes(Quizzes.setup());
  }

  const handleChangeCheck = (quizzIndex, answer) => {
    const newQuizzes = Quizzes.updateOption(quizzes, quizzIndex, answer);

    setQuizzes(newQuizzes);
  }

  const store = { quizzes, started, handleStartGame, handleChangeCheck }

  return (
    <QuizzesContext.Provider value={store}>
      { children }
    </QuizzesContext.Provider>
  )
}
