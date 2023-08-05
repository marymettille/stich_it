import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const stitchItV1Api = createApi({
  reducerPath: "stitchItV1Api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/" }),
  endpoints: (builder) => ({
    getAllPatterns: builder.query({
      query: () => `patterns`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Patterns", id })),
              { type: "Patterns", id: "LIST" },
            ]
          : [{ type: "Patterns", id: "LIST" }],
    }),
    getPattern: builder.query({
      query: ({ id }) => `pattern/${id}`,
    }),
    createPattern: builder.mutation({
      query: (data) => ({
        url: "/patterns",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Patterns", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPatternsQuery,
  useGetPatternQuery,
  useCreatePatternMutation,
} = stitchItV1Api;
