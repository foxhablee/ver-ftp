import { configureStore } from '@reduxjs/toolkit'
import { connectionReducer } from '@/renderer/entities/connection'

export const store = configureStore({
    reducer: {
        connection: connectionReducer,
    },
})

declare global {
    type RootState = ReturnType<typeof store.getState>
    type AppDispatch = typeof store.dispatch
}
