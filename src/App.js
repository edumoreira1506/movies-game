import React from 'react';
import Main from './pages/Main';
import { QuizzesProvider } from './contexts/quizzes';

const App = () => (
  <QuizzesProvider>
    <Main />
  </QuizzesProvider>
);

export default App;
