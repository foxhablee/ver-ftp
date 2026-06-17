import React from 'react'
import { MainPage } from '@/pages/main'
import { ThemeProvider } from './providers/ThemeProvider'

function App(): React.JSX.Element {
    return (
        <ThemeProvider>
            <MainPage />
        </ThemeProvider>
    )
}

export default App
