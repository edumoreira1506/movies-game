import React from 'react';
import { QuizzesProvider } from '../contexts/quizzes';

const App = () => (
  <QuizzesProvider>
    <h1>
      My app!
    </h1>
  </QuizzesProvider>
);

export default App;
