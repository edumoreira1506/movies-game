import api from './api';

export const findAll = async () => {
  const { data } = await api.get('category');

  return data;
}

export const getQuizzes = async categoryId => {
  const { data } = await api.get(`category/${categoryId}/movie`);

  return data;
}
