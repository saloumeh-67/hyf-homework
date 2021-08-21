const animalName=["cow","froge","dunkey","monkey","cat","dog","rabbit"];
const animalMood=["sad","stupid","lazy","crazy","marvelous","funny","fantastic"];
const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${animalName[getRandomNumber(animalName.length)]} ${animalMood[getRandomNumber(animalMood.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();