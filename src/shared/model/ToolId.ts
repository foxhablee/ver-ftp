export const TOOLS_IDS = {
    CONNECTIONS: 'connections',
    BOOKMARKS: 'bookmarks',
    GIT_HISTORY: 'git-history',
} as const

export type ToolId = (typeof TOOLS_IDS)[keyof typeof TOOLS_IDS]
