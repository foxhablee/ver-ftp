import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {},
})

declare global {
    type RootState = ReturnType<typeof store.getState>
    type AppDispatch = typeof store.dispatch
}
