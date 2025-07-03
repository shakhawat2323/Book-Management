import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getborrow: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    createborrow: builder.mutation({
      query: (getborrow) => ({
        url: "/borrow",
        method: "POST",
        body: getborrow,
      }),
      invalidatesTags: ["borrow", "books"],
    }),
    createbooks: builder.mutation({
      query: (Addbooks) => ({
        url: "/books",
        method: "POST",
        body: Addbooks,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),

    updateBooks: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useCreatebooksMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useUpdateBooksMutation,
  useGetborrowQuery,
  useCreateborrowMutation,
} = booksApi;
