import { TOOLS_IDS } from '@/shared/model/ToolId'

export const PAGES_IDS = {
    TOOL: 'tool',
    NEW_CONNECTION: 'new-connection',
} as const

export const pageRegistry = [
    PAGES_IDS.NEW_CONNECTION,
    `${PAGES_IDS.TOOL}/${TOOLS_IDS.CONNECTIONS}`,
    `${PAGES_IDS.TOOL}/${TOOLS_IDS.BOOKMARKS}`,
    `${PAGES_IDS.TOOL}/${TOOLS_IDS.GIT_HISTORY}`,
] as const

export type PageRegistry = typeof pageRegistry

export type PageLink = PageRegistry[number]
