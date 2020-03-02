import React, { createContext, useState } from 'react';

export const QuizzesContext = createContext();

export const QuizzesProvider = ({ children }) => {
  const [ quizzes, setQuizzes ] = useState([]);

  const store = { quizzes }

  return (
    <QuizzesContext.Provider value={store}>
      { children }
    </QuizzesContext.Provider>
  )
}
