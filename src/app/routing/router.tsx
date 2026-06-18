import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@/shared/lib'
import { shellRoute } from '@/pages/shell'
import { toolRouter } from '@/pages/tool'

const routeTree = rootRoute.addChildren([shellRoute, toolRouter])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
