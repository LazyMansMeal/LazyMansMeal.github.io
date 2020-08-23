const HOST = "https://c43e89b21231.ngrok.io"

export default class LazyManServiceClient {
  constructor(options = {}) {
    this.accessToken = options.accessToken || "";
    this.refreshToken = options.refreshToken || "";
  }
  get = async (url = '') => {
    const response = await fetch(HOST + url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.accessToken
      }
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  post = async (url = '', data = {}) => {
    const response = await fetch(HOST + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  register = async (username, password, fullName) => {
    let result = await this.post('/users/register', { username, password, fullName });
    this.accessToken = result.accessToken;
    this.refreshToken = result.refreshToken;
    return result;
  }
  login = async (username, password) => {
    let result = await this.post('/users/login', { username, password });
    this.accessToken = result.accessToken;
    this.refreshToken = result.refreshToken;
    return result;
  }
  getRecipes = async () => {
    let result = await this.get('/recipes');
    return result;
  }
  getRecipe = async (id) => {
    let result = await this.get('/recipes/' + id);
    return result;
  }
  editRecipe = async (id, recipe) => {
    let result = await this.post('/recipes/' + id, recipe);
    return result;
  }
}
