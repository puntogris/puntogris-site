export default async function getAllRepos() {
  const response = await fetch(
    "https://api.github.com/users/puntogris/repos?sort=pushed"
  );
  const json = await response.json();
  return json.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      url: repo.url,
      topics: repo.topics,
    };
  });
}
