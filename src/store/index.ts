import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import type { todosObject } from "../types";

export const toDosApi = createApi({
    reducerPath: 'todo',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/todos' }),
    endpoints: (builder) => ({
        getToDosById: builder.query<todosObject[], string>({
          query: (id) => `/?userId=${id}`,
        }),
    }),
})

export const { useGetToDosByIdQuery } = toDosApi

export const store = configureStore({
    reducer:{
        [toDosApi.reducerPath]: toDosApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(toDosApi.middleware)
})

setupListeners(store.dispatch)