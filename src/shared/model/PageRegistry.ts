import { TOOLS_IDS } from '@/shared/model/Tool'

export const PAGES_IDS = {
    TOOL: 'tool',
} as const

export const pageRegistry = [
    `${PAGES_IDS.TOOL}/${TOOLS_IDS.CONNECTIONS}`,
    `${PAGES_IDS.TOOL}/${TOOLS_IDS.BOOKMARKS}`,
    `${PAGES_IDS.TOOL}/${TOOLS_IDS.GIT_HISTORY}`,
] as const

export type PageRegistry = typeof pageRegistry
