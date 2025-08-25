"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import createFetchClient, { Client, Middleware } from "openapi-fetch";
// import { paths } from "../../src/lib/api/v1";
import { QueryClientProvider } from "@tanstack/react-query";
import refreshToken from "@/api-service/refresh-token";
import { getQueryClient } from "@/config/query-config";

export interface ContextProps {
  accessToken: string | undefined;
  setAccessToken: Dispatch<SetStateAction<string | undefined>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $api: Client<any>;
}

const $api = createFetchClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
  headers: {
    "x-trace-id": crypto.randomUUID(),
  },
});

export const AuthContext = createContext<ContextProps>({
  accessToken: undefined,
  setAccessToken: (): string | undefined => undefined,
  $api: $api,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = React.useState<string | undefined>(
    undefined
  );

  const middleware: Middleware = {
    async onRequest({ request }) {
      request.headers.set("Content-Type", "application/json");
      request.headers.set("Accept", "application/json");

      if (accessToken) {
        request.headers.set("Authorization", `Bearer ${accessToken}`);
      }

      const clonedRequest = request.clone();
      const body = await clonedRequest.text(); // or .json() if preferred

      type ExtendedRequest = Request & { _rawBody?: string };
      (request as ExtendedRequest)._rawBody = body; // attach it manually

      return request;
    },

    async onResponse({ response, request }) {
      if (
        (response.status === 401 || response.status === 403) &&
        !request.headers.get("x-retry")
      ) {
        try {
          const newAccess = await refreshToken();

          if (newAccess) {
            setAccessToken(newAccess);

            const headers = new Headers(request.headers);
            headers.set("Authorization", `Bearer ${newAccess}`);
            headers.set("x-retry", "1");

            const originalBody = (request as Request & { _rawBody?: string })
              ._rawBody;

            const retryRequest = new Request(request.url, {
              method: request.method,
              headers,
              body:
                request.method === "GET" || request.method === "HEAD"
                  ? undefined
                  : originalBody,
            });

            return await fetch(retryRequest);
          }
        } catch (e) {
          console.error("Failed to refresh token:", e);
        }
      }

      return response;
    },
  };

  $api.use(middleware);

  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider
        value={{
          accessToken,
          setAccessToken,
          $api,
        }}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};

export const useGlobalAPI = () => useContext(AuthContext);
