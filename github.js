class Github {
  constructor() {
    this.repos_count = 7;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    // Get github profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const profile = await profileResponse.json();
    // Get user's recent repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}