const cocktailsUrl = new URL('http://localhost:7000/cocktails');
const registerUrl = new URL('http://localhost:7000/register');
const checkoutUrl = new URL('http://localhost:7000/checkout');
const historyUrl = new URL('http://localhost:7000/history');
const userUrl = new URL('http://localhost:7000/userinfo');
const loginUrl = new URL('http://localhost:7000/login');

const setHeader = token => {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };
};

async function fetchUserDataFromDb(token) {
  let jwtToken = token.data.token;
  const response = await fetch(userUrl, setHeader(jwtToken));

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}

async function fetchHistory(token) {
  let jwtToken = token.data.token;
  const response = await fetch(historyUrl, setHeader(jwtToken));
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
  let token;
  try {
    token = localStorage.getItem('authStore');
    if (token === null ) {
      throw new Error('No token found');
    }
  } catch (error) {
    let message = `An error has occured: ${error.message}`;
    throw new Error(message);
  }

  let jwtToken = JSON.parse(token).token;

  const response = await fetch(checkoutUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items: cartItems, token: jwtToken }),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = response.json();
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
