import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeProvider'

function AppProviders({ children }: PropsWithChildren): React.JSX.Element {
    return <ThemeProvider>{children}</ThemeProvider>
}

export default AppProviders
