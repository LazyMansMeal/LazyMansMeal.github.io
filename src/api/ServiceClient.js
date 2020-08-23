const HOST = "https://c43e89b21231.ngrok.io"

async function post(url = '', data = {}, token) {
  const response = await fetch(HOST + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function get(url = '', data = {}) {
  const response = await fetch(HOST + url);
  return response.json(); // parses JSON response into native JavaScript objects
}

export default class LazyManServiceClient {
  constructor(options = {}) {
    this.accessToken = options.accessToken || "";
    this.refreshToken = options.refreshToken || "";
  }
  register = async (username, password, fullName) => {
    let result = await post('/users/register', { username, password, fullName });
    this.accessToken = result.accessToken;
    this.refreshToken = result.refreshToken;
    return result;
  }
  login = async (username, password) => {
    let result = await post('/users/login', { username, password });
    this.accessToken = result.accessToken;
    this.refreshToken = result.refreshToken;
    return result;
  }
  getRecipes = async () => {
    let result = await get('/recipes');
    return result;
  }
  getRecipe = async (id) => {
    let result = await get('/recipes/' + id);
    return result;
  }
  editRecipe = async (id, recipe) => {
    let result = await post('/recipes/' + id, recipe);
    return result;
  }
}
