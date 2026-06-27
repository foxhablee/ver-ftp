import { createContext } from 'react'

export interface FileManagerContextValue {
    path: string[]
    setPath: (newValue: string[]) => void
}

export const FileManagerContext = createContext({} as FileManagerContextValue)
