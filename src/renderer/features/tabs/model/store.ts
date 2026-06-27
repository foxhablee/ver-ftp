import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NewTab, TabItem } from './TabItem'

export interface TabsState {
    activeTabId: string | false
    tabs: TabItem[]
}

const initialTabsState: TabsState = {
    activeTabId: false,
    tabs: [],
}

const tabsSlice = createSlice({
    name: 'tabs',
    initialState: initialTabsState,
    reducers: {
        setActiveTabId(state, action: PayloadAction<TabsState['activeTabId']>) {
            state.activeTabId = action.payload
        },
        createTab(state, action: PayloadAction<NewTab>) {
            const id = crypto.randomUUID()
            state.tabs.push({
                id,
                ...action.payload,
            })
            state.activeTabId = id
        },
        closeTab(state, action: PayloadAction<TabsState['activeTabId']>) {
            const index = state.tabs.findIndex((tab) => tab.id === action.payload)
            state.tabs.splice(index, 1)
            if (action.payload !== state.activeTabId) return

            state.activeTabId = state.tabs.at(-1)?.id || false
        },
        closeAllTabs(state) {
            state.tabs = []
            state.activeTabId = false
        },
    },
    selectors: {
        selectTabs: (state) => state.tabs,
        selectActiveTabId: (state) => state.activeTabId,
    },
})

export const { setActiveTabId, createTab, closeTab, closeAllTabs } = tabsSlice.actions
export const { selectTabs, selectActiveTabId } = tabsSlice.selectors

export default tabsSlice
