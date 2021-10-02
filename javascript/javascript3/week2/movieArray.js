// //movie array
const api = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
fetch(api)
.then(Response => Response.json())
const badMovies = movies.filter(item => item.rating <= 5)
  console.log(badMovies);
const badMovies2000 = badMovies.filter(item => item.year >= 2000)
  console.log(badMovies2000);


//////that resolves after set time
///WE FIRST CREATE THE PROMISE 
const getResolved = (resolveAfter) => {
  return new Promise((resolve, reject) => setTimeout(resolve, resolveAfter * 3000));
};
// THAN WE CONSUME IT 
getResolved(3).then(() => console.log("I am called asynchronously"));

////async and wait 
async function resolving() {

  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 8000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}
resolving();

//////////// Rewrite Time /////////
const setTimeoutPromise = (delayTime) => new Promise((resolve) => setTimeout(resolve, delayTime));

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});
function getPosition(){
  return new Promise((resolve, reject) => 
      navigator.geolocation.getCurrentPosition(resolve, reject)
  );
} 
 getPosition()
    .then((position) => {
      // called when the users position is found
      console.log(position);
    })
    .catch((error) => {
      // called if there was an error getting the users location
      console.log(error);
    });
    ////////Fetching and waiting/////////
    const api2 = "https://dog.ceo/api/breeds/image/random";
    const waitingPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(api2)
          .then(response => response.json())
          .then((data)=> document.getElementById("dogBreeds").innerHTML = `
          <img src="${data.message}" alt="Cute dog" />`)
        resolve('called with promise after 3 seconds')
        reject('there is an error')
      }, 3000);
        
    });
    waitingPromise.then(msg => console.log(msg))
    waitingPromise.catch(err => console.log(err))
////////async await 
setTimeout(() => {fetchRandomPics();}, 3000);
    const fetchRandomPics = async ()=>{
      const response = await fetch(api2);
      const data = await response.json();
      document.getElementById("dogBreeds").innerHTML = `
          <img src="${data.message}" alt="Cute dog" />`
      }
      ///I prefer to work with async await :)
    

