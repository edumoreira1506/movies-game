import React, { createContext, useState, useEffect } from 'react';
import * as Quizzes from '../models/Quizzes';
import * as User from '../models/User';
import * as Category from '../models/Category';

export const QuizzesContext = createContext();

export const QuizzesProvider = ({ children }) => {
  const [ quizzes, setQuizzes ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ started, setStarted ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ showRanking, setShowRanking ] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const { categories: fetchedCategories } = await Category.all();

      setCategories(fetchedCategories)
      setLoading(false);
    }

    fetchCategories();
  }, []);

  const toggleRanking = () => setShowRanking(!showRanking);

  const handleStartGame = () => {
    setLoading(true);

    const setupCallback = quizzesApi => {
      setQuizzes(quizzesApi);
      setStarted(true);
      setLoading(false);
    }

    setQuizzes(Quizzes.setup(setupCallback));
  }

  const handleSelectCategory = category => {
    setLoading(true);

    const setupCallback = quizzesApi => {
      setQuizzes(quizzesApi);
      setStarted(true);
      setLoading(false);
    }

    setQuizzes(Quizzes.setupByCategory(category, setupCallback));
  }

  const handleChangeCheck = (quizzIndex, answer) => {
    const newQuizzes = Quizzes.updateOption(quizzes, quizzIndex, answer);

    setQuizzes(newQuizzes);
  }

  const handleFinishGame = () => {
    const name = User.getUsername();
    const { quizzes: newQuizzes, points } = Quizzes.finishGame(quizzes, name);

    alert(`Você acertou ${points} de ${newQuizzes.length} perguntas.`);

    setStarted(false);
    setQuizzes(newQuizzes);
  }

  const store = {
    quizzes, started,
    handleStartGame, handleChangeCheck,
    handleFinishGame, loading, toggleRanking,
    showRanking, categories, handleSelectCategory
  };

  if (!User.isAuthenticated()) User.authenticate();

  return (
    <QuizzesContext.Provider value={store}>
      { children }
    </QuizzesContext.Provider>
  )
}
