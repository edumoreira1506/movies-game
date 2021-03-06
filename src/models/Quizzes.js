import * as GameService from '../services/GameService';
import * as RankingService from '../services/RankingService';
import * as Category from './Category';

const quizzTemplate = ({
  sentence,
  answers
}) => ({
  sentence,
  options: answers.map(item => answerTemplate(item.answer, item.correct))
});

const answerTemplate = (answer, correct, checked = false, disabled = false) => ({
  answer, correct, checked, disabled
});

export const setup = async (callback) => {
  const { quizzes } = await GameService.setup();
  const quizzesWithTemplate = quizzes.map(quizzTemplate);

  return callback(quizzesWithTemplate);
};

export const setupByCategory = async (category, callback) => {
  const { quizzes } = await Category.getQuizzes(category);
  const quizzesWithTemplate = quizzes.map(quizzTemplate);

  return callback(quizzesWithTemplate);
}

export const updateOption = (quizzes, quizzIndex, answer) => {
  const newQuizzes = quizzes.map((item, index) => {
    if (index === quizzIndex) {
      const newOptions = item.options.map(item => 
        item.answer === answer ? { ...item, checked: true } : { ...item, checked: false }
      );

      return { ...item, options: newOptions };
    }

    return { ...item }
  });

  return newQuizzes;
}

const getCorrectAnswer = quizz => quizz.options.find(item => Boolean(item.correct));

const getPoints = quizzes => quizzes.reduce((points, quizz) => {
  const correctAnswer = getCorrectAnswer(quizz);

  if (correctAnswer.checked) {
    return points + 1;
  }

  return points;
}, 0)

export const finishGame = (quizzes, name) => {
  const newQuizzes = quizzes.map(item => ({
    ...item,
    options: item.options.map(itemOption => ({
      ...itemOption,
      disabled: true
    }))
  }));
  const points = getPoints(quizzes);
  const pointsRanking = getPointsRanking(points, quizzes.length);
  const rankingUser = { points: pointsRanking, name };

  RankingService.store(rankingUser);

  return { quizzes: newQuizzes, points };
}

const getPointsRanking = (rightAnswers, amountOfQuizzes) =>
  100 * rightAnswers / amountOfQuizzes;

