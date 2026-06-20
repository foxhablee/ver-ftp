import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/renderer/shared/lib'
import MainPage from './ui/MainPage'

export const shellRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: MainPage,
})
