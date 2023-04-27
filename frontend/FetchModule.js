const cocktailsUrl = new URL('http://localhost:8000/cocktails');
const registerUrl = new URL('http://localhost:8000/register');
const checkoutUrl = new URL('http://localhost:8000/checkout');
const historyUrl = new URL('http://localhost:8000/history');
const userUrl = new URL('http://localhost:8000/userinfo');
const loginUrl = new URL('http://localhost:8000/login');

const authenticateUser = (token) =>{
  
 return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
 }
  };
}

async function fetchUserDataFromDb(token) {
  let jwtToken = token.data.token;
  console.log('fetchUserDataFromDb:', jwtToken);
  console.log(authenticateUser(jwtToken));
  const response = await fetch(userUrl, authenticateUser(jwtToken));
  
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}

async function fetchHistory() {
  const response = await fetch(historyUrl);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}
async function fetchCocktailMenu() {
  const response = await fetch(cocktailsUrl);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}

async function postRegisterForm(newUser) {
  const response = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  return data;
}

async function postCartToDb(cartItems) {
  const response = await fetch(checkoutUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItems),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();

  return data;
}

async function loginUser(user) {
  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = response.json();
  return data;
}

export {
  fetchCocktailMenu,
  postRegisterForm,
  postCartToDb,
  fetchHistory,
  fetchUserDataFromDb,
  loginUser,
};
