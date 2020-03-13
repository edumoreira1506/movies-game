import api from './api';

export const store = async (rankingUser) => {
  const { data } = await api.post('ranking', rankingUser);

  return data;
}
