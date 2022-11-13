const URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`Произошлп ошибка: ${res.status}`);
};

export const getData = () => {
  return fetch(URL).catch(checkResponse);
};

export const getOrder = (ingredientsId) => {
  return fetch(URL, {
    method: `POST`,
    headers: {
      "Content-type": "applicatuon/json;charset=utf-8",
    },
    body: JSON.stringfy({ ingredients: ingredientsId }),
  }).then(checkResponse);
};
