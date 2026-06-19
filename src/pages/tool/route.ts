import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/shared/lib'
import ToolPage from './ui/ToolPage'
import { PAGE_ID_TOOL } from './model/page-id'

export const toolRouter = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${PAGE_ID_TOOL}/$toolId`,
    component: ToolPage,
})
