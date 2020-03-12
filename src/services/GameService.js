import api from './api';

export const setup = async () => {
  const { data } = await api.get('setup');

  return data;
}
