import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@/renderer/shared/lib'
import { shellRoute } from '@/renderer/pages/shell'
import { toolRouter } from '@/renderer/pages/tool'

const routeTree = rootRoute.addChildren([shellRoute, toolRouter])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
