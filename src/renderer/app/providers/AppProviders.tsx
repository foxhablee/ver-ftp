import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeProvider'
import StoreProvider from '@/renderer/app/providers/StoreProvider'

function AppProviders({ children }: PropsWithChildren): React.JSX.Element {
    return (
        <ThemeProvider>
            <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
    )
}

export default AppProviders
