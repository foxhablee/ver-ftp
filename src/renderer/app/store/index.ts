import { configureStore } from '@reduxjs/toolkit'
import { api } from '@/renderer/shared/api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tabsSlice } from '@/renderer/features/tabs'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [tabsSlice.reducerPath]: tabsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

declare global {
    type RootState = ReturnType<typeof store.getState>
    type AppDispatch = typeof store.dispatch
}
