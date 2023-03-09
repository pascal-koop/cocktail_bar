const cocktailsUrl = new URL('http://localhost:8000/cocktails');
const registerUrl = new URL('http://localhost:8000/register');
const checkoutUrl = new URL('http://localhost:8000/checkout');
const historyUrl = new URL('http://localhost:8000/history');
const userUrl = new URL('http://localhost:8000/userinfo');

async function fetchUserDataFromDb() {
  const response = await fetch(userUrl);
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
  console.log(data);
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

// fetchData().then(data => {
//   console.log(data);
// });

/*
// Promise
function fetchData() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
*/

export { fetchCocktailMenu, postRegisterForm, postCartToDb, fetchHistory, fetchUserDataFromDb };
