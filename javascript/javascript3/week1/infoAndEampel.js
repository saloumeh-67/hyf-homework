// 1) setTimeout, setInterval
console.log("Page loaded");

const whatShouldHappen = () => {
  console.log("setTimeout fired");
};
const afterHowMuchTime = 3000;
const setTimeoutId = setTimeout(whatShouldHappen, afterHowMuchTime);
console.log(`setTimeout started with id ${setTimeoutId}`);

document
  .getElementById("setTimeoutStopButton")
  .addEventListener("click", () => {
    clearTimeout(setTimeoutId);
  });

const whatShouldPeriodicallyHappen = () => {
  console.log("setInterval fired");
};
const howFrequently = 1000;
const setIntervalId = setInterval(whatShouldPeriodicallyHappen, howFrequently);
console.log(`setInterval started with id ${setIntervalId}`);

document
  .getElementById("setIntervalStopButton")
  .addEventListener("click", () => {
    clearInterval(setIntervalId);
  });

// 2) Promises

// Pending
// -> Resolved, fulfilled
// -> Rejected
const promise = new Promise((resolve, reject) => {
  const completePromise = () => {
    const isItHead = Math.random() < 0.5;
    if (isItHead) {
      resolve("head");
    } else {
      reject("tail");
    }
  };
  const completePromiseAfterTime = 1000;
  setTimeout(completePromise, completePromiseAfterTime);
});

console.log(promise);
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// 3) async await
const promiseForAsync = new Promise((resolve) => {
  const completePromise = () => {
    resolve("Here is what I promised");
  };
  const completePromiseAfterTime = 2000;
  setTimeout(completePromise, completePromiseAfterTime);
});

const exampleSyncFunction = () => {
  promiseForAsync.then((value) => {
    const promiseResult = value;
    console.log(promiseResult);
  });
};

exampleSyncFunction();

const exampleAsyncFunction = async () => {
  const promiseResult = await promiseForAsync;
  console.log(promiseResult);
};

exampleAsyncFunction();

// 4) Fetch API
const api = "https://dog.ceo/api/breeds/image/random";

const fetchRandomDogPictureSync = () => {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("dogContainer1").innerHTML = `
        <img src="${data.message}" alt="Cute dog" />
      `;
    });
};

const fetchRandomDogPictureAsync = async () => {
  const response = await fetch(api);
  const data = await response.json();
  document.getElementById("dogContainer2").innerHTML = `
    <img src="${data.message}" alt="Cute dog" />
  `;
};

fetchRandomDogPictureSync();
fetchRandomDogPictureAsync();