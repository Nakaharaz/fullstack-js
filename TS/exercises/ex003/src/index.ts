interface GitHubUser {
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
}

async function fetchGitHubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .catch(err => Promise.reject(err))

  const gitHubUser: GitHubUser = {
    id: response.id,
    login: response.login,
    name: response.name,
    bio: response.bio,
    public_repos: response.public_repos,
    repos_url: response.repos_url
  }

  return gitHubUser
}

const enzo = fetchGitHubUser('nakaharaz').then((res) => res.login)

console.log(enzo)