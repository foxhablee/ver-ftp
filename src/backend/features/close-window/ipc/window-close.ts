import type { BrowserWindow } from 'electron'
import { IpcError } from '@/shared/ipc'
import { closeWindow } from '../api/close-window'
import { wrapIpcHandler } from '@/backend/shared/lib'
import { WINDOW_CLOSE_METHOD_CHANNEL, WindowCloseMethod } from '../model/window-close.ipc-model'

interface Deps {
    parent: BrowserWindow
}

export function ipcHandlerWindowClose(deps: Deps) {
    return wrapIpcHandler(WINDOW_CLOSE_METHOD_CHANNEL, async (_, props: WindowCloseMethod['props']) => {
        const closed = closeWindow({ parent: deps.parent, id: props.id })
        if (!closed) {
            throw new IpcError('not_found', `window with id ${props.id} not found`)
        }
    })
}
