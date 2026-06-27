export interface TabItem {
    id: string
    name: string
    contentInfo?: object
}

export type NewTab = Omit<TabItem, 'id'>
