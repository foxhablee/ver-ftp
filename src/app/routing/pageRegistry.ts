import { PAGE_ID_TOOL } from '@/pages/tool/model/page-id'
import { TOOL_ID_CONNECTIONS } from '@/features/connections-tool'
import { TOOL_ID_BOOKMARKS } from '@/features/bookmarks-tool'
import { TOOL_ID_GIT_HISTORY } from '@/features/git-history-tool'
import { PageRegistry } from '@/features/subwindow'

export const pageRegistry = [
    `${PAGE_ID_TOOL}/${TOOL_ID_CONNECTIONS}`,
    `${PAGE_ID_TOOL}/${TOOL_ID_BOOKMARKS}`,
    `${PAGE_ID_TOOL}/${TOOL_ID_GIT_HISTORY}`,
] as const satisfies PageRegistry
