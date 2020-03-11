import quizzes from '../quizzes.json';
import { sample, shuffle } from 'lodash';

export const getSentences = (amount, initialAnswers = []) => {
  let answers = initialAnswers;

  do {
    const answer = getRandomAnswer();

    if (!answers.includes(answer)) {
      answers.push(answer);
    }
  } while (answers.length < amount);

  return answers;
}

export const getMovies = (amount, initialMovies = []) => {
  let movies = initialMovies;

  do {
    const movie = getRandomMovie();

    if (!movies.includes(movie)) {
      movies.push(movie);
    }
  } while (movies.length < amount);

  return movies;
}

const getRandomAnswer = () => {
  const movie = getRandomMovie();
  const answers = quizzes[movie];
  const answer = sample(answers);

  return answer;
}

const getRandomMovie = () => {
  const movies = Object.keys(quizzes);
  const movie = sample(movies);

  return movie;
}

const answerTemplate = (answer, correct, checked = false) => ({
  answer, correct, checked
});

const getMovieBySentence = sentence => {
  const movies = Object.keys(quizzes);
  const movie = movies.find(item => quizzes[item].includes(sentence));

  return movie;
}

const getAnswers = sentences => sentences.map(sentence => {
  const rightAnswer = getMovieBySentence(sentence);
  const asnwers = getMovies(5, [ rightAnswer ]);
  const asnwersWithTemplate = asnwers.map((item, index) =>
    index ? answerTemplate(item, false) : answerTemplate(item, true)
  );
  const options = shuffle(asnwersWithTemplate);

  return { sentence, options }
});

export const setup = () => {
  const sentences = getSentences(5);
  const answers = getAnswers(sentences);

  return answers;
};

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
