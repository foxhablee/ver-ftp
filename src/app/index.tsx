import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { router } from './routing/router'
import AppProviders from './providers/AppProviders'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProviders>
            <RouterProvider router={router} />
        </AppProviders>
        <TanStackRouterDevtools />
    </StrictMode>,
)
