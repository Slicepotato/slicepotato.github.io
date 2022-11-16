const getUrl ='https://www.buzzfeed.com/tjmomma/who-should-you-invite-to-friendsgiving-your-trade-23j7egqjbr?utm_source=dynamic&utm_campaign=bfsharecopy&fbclid=IwAR0LLNl37Q3e-aCDj7Gbx99s-t4QmuCqZ4USpBxGZ0mkr3Jeomlvj0oEHtY';
let promises = [];
for (let i = 1; i <= 300; i++) {
  promises.push(fetch(getUrl));
}
Promise.all(promises)
  .then(function handleData(data) {
    return fetch("buzzfeed.com") // should be returned 1 time
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      });
  })
  .catch(function handleError(error) {
    console.log("Error" + error);
  });