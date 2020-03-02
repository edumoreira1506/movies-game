import React, { createContext } from 'react';

export const QuizzesContext = createContext();

export const QuizzesProvider = ({ children }) => {
  return (
    <QuizzesContext.Provider value={[]}>
      { children }
    </QuizzesContext.Provider>
  )
}
