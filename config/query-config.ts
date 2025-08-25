import {
  MutationCache,
  QueryCache,
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
} from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        console.log("query error", error);
      },
    }),

    mutationCache: new MutationCache({
      onError: (error) => {
        console.log("error", error.message);
      },
    }),

    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retryDelay: (attemptIndex) => Math.min(2000 * 2 ** attemptIndex, 30000),
        retry: 5,

        staleTime: 3 * 1000, // 3 seconds, will help to reduce the number of requests, its good for SSR

        gcTime: Infinity,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
