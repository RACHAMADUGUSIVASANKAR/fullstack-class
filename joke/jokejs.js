const jokeDiv = document.getElementById('jokeDiv');
const setupSpan = jokeDiv.querySelector('.setup');
const punchlineSpan = jokeDiv.querySelector('.punchline');
const getJokeBtn = document.getElementById('getJokeBtn');
const nextJokeBtn = document.getElementById('nextJokeBtn');

async function getJoke() {
  try {
    const response = await fetch(
      'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart'
    );
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    if (data.error) {
      throw new Error(data.message || 'Joke API returned an error.');
    }
    return { setup: data.setup, punchline: data.delivery };
  } catch (error) {
    console.error('Failed to fetch joke:', error);
    return null;
  }
}

function displayJoke(joke) {
  if (joke) {
    setupSpan.textContent = joke.setup;
    punchlineSpan.textContent = joke.punchline;
    setupSpan.classList.remove('error');
    punchlineSpan.classList.remove('error');
  } else {
    setupSpan.textContent = "Couldn’t fetch a joke, try again!";
    punchlineSpan.textContent = "";
    setupSpan.classList.add('error');
    punchlineSpan.classList.add('error');
  }
}

async function handleJoke() {
  const joke = await getJoke();
  displayJoke(joke);
  getJokeBtn.style.display = 'none';
  nextJokeBtn.style.display = 'inline-block';
}

async function handleNextJoke() {
  const joke = await getJoke();
  displayJoke(joke);
}

getJokeBtn.addEventListener('click', handleJoke);
nextJokeBtn.addEventListener('click', handleNextJoke);
