export default async function getPinnedRepos() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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",
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
  return json.data.repositoryOwner.itemShowcase.items.edges.map((repo) => repo.node.name);
}
