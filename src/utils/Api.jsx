const URL = "https://norma.nomoreparties.space/api";

class Api {
  constructor(url) {
    this.url = url;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getIngredients() {
    return this._request(`${this.url}/ingredients`, {
      method: "GET",
    });
  }
}

export const newApi = new Api(URL);
