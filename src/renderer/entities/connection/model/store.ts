import { RegisteredConnection } from '@/shared/model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ConnectionsState {
    value: Map<string, RegisteredConnection>
}

const initialState: ConnectionsState = {
    value: new Map(),
}

export const connectionSlice = createSlice({
    name: 'connections',
    initialState,
    reducers: {
        connect: (state, action: PayloadAction<RegisteredConnection>) => {
            state.value.set(action.payload.id, action.payload)
        },
        disconnect: (state, action: PayloadAction<RegisteredConnection>) => {
            state.value.delete(action.payload.id)
        },
    },
})

export const { connect, disconnect } = connectionSlice.actions

export default connectionSlice.reducer
