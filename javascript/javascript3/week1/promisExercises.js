// this is happening - backend, server, API
// function YesNoFail4Seconds() {
//   console.log("Start getting yes/no");
//   return new Promise((resolve, reject) => {
//     const decision = Math.floor(Math.random() * 3);
//     console.log(`decision = ${decision}`);
//     setTimeout(() => {
//       if (decision === 0) resolve("yes");
//       else if (decision === 1) resolve("no");
//       else reject("failure!!!");
//     }, 4000);
//   });
// }
// //you make this code (frontend)
// YesNoFail4Seconds()
//   .then((returnedHelloObject) => {
//     console.log(`The answer is ${returnedHelloObject}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
  
/////exercise 4
// getLoggedInUsers should wait 5 seconds before it resolves with the users! 
// Sometimes it should resolve and sometimes it should reject. 
// Look into Math.random
// getLoggedInUsers()
// .then(users => {
//     console.log(users); // ['benna', 'magdy', 'carolina']
// }).catch(error => {
//     console.log(error);
// });

   async function getLoggedInUsers() {
          console.log("Start getting yes/no");
          return new Promise((resolve, reject) => {
            const users = ['benna', 'magdy', 'carolina']; 
            const result = Math.floor(Math.random() * 5);
            console.log(result);
            setTimeout(() => {
              if (users === 0) resolve("yes");
              else if (users === 1) resolve("no");
              else reject("failure!!!");
            }, 4000);
          });
        }
        getLoggedInUsers()
        .then(users => {
            console.log(users); // ['benna', 'magdy', 'carolina']
        }).catch(error => {
            console.log(error);
        });

       ///////
       async function getAstronauts() {
        const astronautsResponse = await fetch(
            "http://api.open-notify.org/astros.json"
        );
        console.log(astronautsResponse);
        const astronauts = await astronautsResponse.json();
        console.log(astronauts);
        return astronauts;
    }
    getAstronauts();
     async function getMovies() {
         const moviesResponse = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
         ;
         console.log(
             "movies"
         );
         const movies = await moviesResponse.json();
         console.log(movies);
         return movies;
     }
     getMovies();