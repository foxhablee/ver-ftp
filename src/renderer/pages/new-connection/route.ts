import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/renderer/shared/lib'
import { PAGES_IDS } from '@/shared/model'
import NewConnectionPage from './ui/NewConnectionPage'

export const newConnectionPage = createRoute({
    getParentRoute: () => rootRoute,
    path: PAGES_IDS.NEW_CONNECTION,
    component: NewConnectionPage,
})
