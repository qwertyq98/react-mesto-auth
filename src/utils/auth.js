export const BASE_URL = 'https://auth.nomoreparties.co';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

function request(url, options) {
  return fetch(`${BASE_URL}${url}`, options).then(checkResponse);
}

export const register = (password, email) => {
  return request(`/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
}; 

export const authorize = (email, password) => {
  return request(`/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  })
  .then((data) => {
    if (data.token){
      localStorage.setItem('jwt', data.token);
      return data;
    }
  });
};

export const checkToken = (token) => {
  return request(`/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => {
    return res;
  })
};