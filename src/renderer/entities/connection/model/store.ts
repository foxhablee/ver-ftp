import { RegisteredConnection } from '@/shared/model'
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'

const adapter = createEntityAdapter<RegisteredConnection>()

export const connectionSlice = createSlice({
    name: 'connections',
    initialState: adapter.getInitialState(),
    reducers: {
        connect: (state, action: PayloadAction<RegisteredConnection>) => {
            adapter.upsertOne(state, action.payload)
        },
        disconnect: (state, action: PayloadAction<RegisteredConnection>) => {
            adapter.removeOne(state, action.payload.id)
        },
    },
})

export const { connect, disconnect } = connectionSlice.actions

export default connectionSlice.reducer

export const connectionSelectors = adapter.getSelectors<RootState>((s) => s.connection)
