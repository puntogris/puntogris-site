import getAllRepos from "./getAllRepositories";
import getPinnedRepos from "./getPinnedRepositories";

export default async function getProjects() {
  const allRepos = await getAllRepos();
  const pinnedRepoNames = await getPinnedRepos();
  const pinned = [];
  const remaining = [];

  allRepos.forEach((repo) => {
    if (pinnedRepoNames.includes(repo.name)) {
      pinned.push(repo);
    } else {
      remaining.push(repo);
    }
  });

  return {
    pinned: pinned,
    remaining: remaining,
  };
}
