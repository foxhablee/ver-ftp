import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/shared/lib'
import ToolPage from './ui/ToolPage'

export const toolRouter = createRoute({
    getParentRoute: () => rootRoute,
    path: '/tool/$toolId',
    component: ToolPage,
})
