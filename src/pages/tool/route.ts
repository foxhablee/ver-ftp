import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/shared/lib'
import ToolPage from './ui/ToolPage'
import { PAGES_IDS } from '@/shared/model'

export const toolRouter = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${PAGES_IDS.TOOL}/$toolId`,
    component: ToolPage,
})
