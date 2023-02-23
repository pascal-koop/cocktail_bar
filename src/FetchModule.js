const url = new URL('http://localhost:8000/cocktails');

// Async/Await

async function fetchData() {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  console.log(response.headers);
  const data = await response.json();
  console.log("Data:");
  console.log(data);

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

export { fetchData };
