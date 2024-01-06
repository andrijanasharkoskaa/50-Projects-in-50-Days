const jokeEl = document.getElementById("joke");
const jokeButtonEl = document.getElementById("joke-btn");
jokeButtonEl.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  //Using FETCH and .then
  //   fetch("https://icanhazdadjoke.com", config)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       jokeEl.innerHTML = data.joke;
  //     });

  //Using ASYNC/AWAIT
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
