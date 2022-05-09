export class ApiUrl {
  getUser(username: string) {
    return `users/${username}`;
  }

  getRepositories(username: string) {
    return `repositories/${username}`;
  }

  getCommits(username: string, repoName: string) {
    return `commits/${username}/${repoName}`;
  }
}
