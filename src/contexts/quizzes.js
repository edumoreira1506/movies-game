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

  const store = { quizzes, started, handleStartGame }

  return (
    <QuizzesContext.Provider value={store}>
      { children }
    </QuizzesContext.Provider>
  )
}
