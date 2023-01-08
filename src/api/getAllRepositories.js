export default async function getAllRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/puntogris/repos?sort=pushed", {
        headers: {
            "Authorization": `token ${import.meta.env.GITHUB_TOKEN}`,
        }
      }
    );
    const json = await response.json();
    return json.map((repo) => {
      return {
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        topics: repo.topics,
      };
    });
  } catch (error) {
    return [];
  }
}
