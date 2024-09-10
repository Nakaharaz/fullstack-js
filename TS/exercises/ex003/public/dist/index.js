"use strict";
const registeredUsers = [];
async function fetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json());
    if (response.message === 'Not Found') {
        return Promise.reject(`User not found!!`);
    }
    const gitHubUser = {
        id: response.id,
        login: response.login,
        name: response.name,
        bio: response.bio,
        public_repos: response.public_repos,
        repos_url: response.repos_url
    };
    registeredUsers.push(gitHubUser);
    console.log(`Hello ${gitHubUser.name}! It's nice to see you here!\nI see that you have ${gitHubUser.public_repos} public repos!!! That's awesome man!`);
    return gitHubUser;
}
async function showUserRepos(user) {
    const response = await fetch(user.repos_url).then(res => res.json());
    if (response.message === 'Not Found') {
        return Promise.reject("This user don't have any public repo!");
    }
    const topThreeRepos = [];
    response.splice(0, 3).forEach((repo) => {
        const userRepo = {
            description: repo.description,
            fork: repo.fork,
            name: repo.name,
            stargazers_count: repo.stargazers_count
        };
        topThreeRepos.push(userRepo);
    });
    return topThreeRepos;
}
function showAllUsers() {
    let list = 'Users:\n';
    registeredUsers.forEach((user, index) => {
        list += `
    ID: ${user.id}
    Name: ${user.name}
    Bio: ${user.bio}
    Repos count: ${user.public_repos}
    `;
    });
    console.log(list);
}
function calcTotalPublicRepos() {
    let total = 0;
    registeredUsers.forEach(user => total += user.public_repos);
    console.log(`Adding the number of repositories of ${registeredUsers.length} users, the result is = ${total}`);
}
function showTopFive() {
    const sortedUsers = [...registeredUsers.slice(0, 4)];
    sortedUsers.sort((a, b) => b.public_repos - a.public_repos);
    let list = 'Here are the top 5 users with more public repositories!:\n';
    sortedUsers.forEach((user, index) => {
        list += `
    ID: ${user.id}
    Name: ${user.name}
    Bio: ${user.bio}
    Repos count: ${user.public_repos}
    `;
    });
    console.log(list);
}
Promise.all([fetchGitHubUser('gustavoguanabara'), fetchGitHubUser('nakaharaz'), fetchGitHubUser('isaacpontes')])
    .then(res => {
    showAllUsers();
    calcTotalPublicRepos();
    showTopFive();
});
