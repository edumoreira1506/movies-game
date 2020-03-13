export const getUsername = () => window.localStorage.getItem('username');

const setUsername = username => window.localStorage.setItem('username', username);

export const isAuthenticated = () => Boolean(getUsername());

export const authenticate = () => {
  const username = window.prompt('Como essa é a primeira vez que você está jogando, qual seu nome?');
  
  setUsername(username);
}
