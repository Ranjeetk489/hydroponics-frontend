const BASE_URL = 'https://localhost:3000';

interface IUserAuth {
  email: string;
  password: string;
}

const handleResponse = (res: Response): Promise<unknown> => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const register = ({ email, password }: IUserAuth): Promise<unknown> => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, email }),
  }).then(handleResponse);
};

const login = ({ email, password }: IUserAuth): Promise<unknown> => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, email }),
  }).then(handleResponse);
};

// const validateToken = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   }).then(handleResponse);
// };

export { login, register };
