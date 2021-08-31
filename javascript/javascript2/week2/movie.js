//using filter and map for finding shortest and longest titles.
const shortestMovieName = movies.filter((titles)=>titles.title.length < 4).map((titles)=>titles.title);
    console.log(shortestMovieName);
const longestMovieName = movies.filter((titles)=>titles.title.length > 10).map((titles)=>titles.title);
    console.log(longestMovieName);
// movies made between 1980-1989
const yearsOfMade = movies.filter(movie => (movie.year >= 1980 && movie.year <= 1989));
    console.log(yearsOfMade);
// movie rates that shows "Good (>= 7), Average (>= 4 and < 7), Bad (< 4)"
const ratingMovies = movies.map(item => {
    if (item.rating >= 7) { item['tag'] = 'Good' }
    if (item.rating >= 4 && item.rating < 7) { item['tag'] = 'Average' }
    if (item.rating < 4) { item['tag'] = 'Bad' }
    return item.tag //
  });
    console.log(ratingMovies);
//movie rate more than 6 
const moviesWithHighRate = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(moviesWithHighRate);
//keywords
const keywords = {'Surfer': 0, 'Alien': 0, 'Benjamin': 0};
const findingKeyWords = movies.filter(movie => {
    if (movie.title in keywords) {
      keywords[movie.title]++
      keywords['total']++
    };
  });
  console.log(keywords);

