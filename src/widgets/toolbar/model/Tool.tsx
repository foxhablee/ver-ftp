export const TOOLS = {
    CONNECTIONS: 'connections',
    GIT_HISTORY: 'git-history',
    BOOKMARKS: 'bookmarks',
} as const

export type Tool = (typeof TOOLS)[keyof typeof TOOLS]
