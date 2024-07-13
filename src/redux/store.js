import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [baseApi.reducerPath]: baseApi.reducer,
      },
      // Adding the api middleware enables caching, invalidation, polling,
      // and other useful features of `rtk-query`.
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)