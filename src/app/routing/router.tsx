import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@/shared/lib'
import { shellRoute } from '@/pages/main'

const routeTree = rootRoute.addChildren([shellRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
