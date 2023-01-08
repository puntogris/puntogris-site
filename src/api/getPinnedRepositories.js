export default async function getPinnedRepos() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
        query {
          repositoryOwner(login: "puntogris") {
            ... on ProfileOwner {
              pinnedItemsRemaining
              itemShowcase {
                items(first: 5) {
                  totalCount
                  edges {
                    node {
                      ... on Repository {
                        name
                      }
                    }
                  }
                }
                hasPinnedItems
              }
            }
          }
        }
        `,
      }),
    });

    const json = await response.json();
    return json.data.repositoryOwner.itemShowcase.items.edges.map(
      (repo) => repo.node.name
    );
  } catch (error) {
    return [];
  }
}
