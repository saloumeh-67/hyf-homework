//Lets use the github api to see what repositories different users have.
const repository = document.getElementById("userRepos");
const names = ["JiuTak", "FlorentinaPetica", "NataliaS1994"];
const urlPromiseArray = [];
//instead of writing 3 urlPromiseArray we can use this
names.forEach((uName) =>
  urlPromiseArray.push(fetch(`https://api.github.com/search/repositories?q=user:${uName}`))
);

let users = () => {
  Promise.all(urlPromiseArray)

    .then((responses) => {
      return Promise.all(responses.map((response) => response.json()));
    })
    .then((datas) => {
      console.log(datas);
      //creating a new array that contains all the item in the arrays
      let usersData = datas.map((data) => data.items);

      usersData.forEach((el) => {
        const li = document.createElement("li");
        //creating separates arrays for each user
        const userRepos = el;

        //creating a list that contains all the repositories for each user
        let usersRepos = "";
        userRepos.forEach(
          (repo) =>
            (usersRepos += `<li><span>${repo.name}</span> : <a href="${repo.html_url}">${repo.html_url}</a></li>`)
        );

        li.innerHTML = `
            <li style="font-size:10px;color:black;font-weight:bolder">${userRepos[0].owner.login}\'s repositories</li>
            <ul>${usersRepos}</ul>
            `;

        repository.append(li);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

users();
