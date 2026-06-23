import type { BrowserWindow } from 'electron'
import { IPC_METHODS, IpcError } from '@/shared/ipc'
import type { IpcWindowCloseProps } from '@/shared/model'
import { closeWindow } from '../api/close-window'
import { wrapIpcHandler } from '@/backend/shared/lib'

interface Deps {
    parent: BrowserWindow
}

export function ipcHandlerWindowClose(deps: Deps) {
    return wrapIpcHandler(IPC_METHODS.WINDOW_CLOSE, async (_, props: IpcWindowCloseProps) => {
        const closed = closeWindow({ parent: deps.parent, id: props.id })
        if (!closed) {
            throw new IpcError('not_found', `window with id ${props.id} not found`)
        }
    })
}
