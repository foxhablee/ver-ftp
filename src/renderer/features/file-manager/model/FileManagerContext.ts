import { createContext } from 'react'
import { RegisteredConnection } from '@/shared/model'

export interface FileManageContextValue {
    connectionId: RegisteredConnection['id'] | -1
    setConnectionId: (newValue: RegisteredConnection['id']) => void
    path: string[]
    setPath: (newValue: string[]) => void
}

export const FileManagerContext = createContext({} as FileManageContextValue)
