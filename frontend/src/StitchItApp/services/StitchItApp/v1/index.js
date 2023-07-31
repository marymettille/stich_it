import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const stitchItV1Api = createApi({
  reducerPath: "stitchItV1Api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/" }),
  endpoints: (builder) => ({
    getAllPatterns: builder.query({
      query: () => `patterns`,
    }),
    getPattern: builder.query({
      query: ({ id }) => `pattern/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPatternsQuery, useGetPatternQuery } = stitchItV1Api;
