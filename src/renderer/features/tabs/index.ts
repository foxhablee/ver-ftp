export {
    setActiveTabId,
    closeTab,
    createTab,
    selectTabs,
    selectActiveTabId,
    closeAllTabs,
    default as tabsSlice,
} from './model/store'
export type { TabItem, NewTab } from './model/TabItem'
export { default as ContentInTabs } from './ui/ContentInTabs'
