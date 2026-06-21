import type { BrowserWindow, IpcMainInvokeEvent } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'
import type { IpcWindowCloseProps } from '@/shared/model'
import { closeWindow } from '../api/close-window'

interface Deps {
    parent: BrowserWindow
}

export function ipcHandlerWindowClose(deps: Deps) {
    return async (
        _: IpcMainInvokeEvent,
        props: IpcWindowCloseProps,
    ): Promise<IpcResponseMap[typeof IPC_METHODS.WINDOW_CLOSE]> => {
        try {
            const closed = closeWindow({ parent: deps.parent, id: props.id })
            if (!closed) {
                return { ok: false, code: 'not_found', errorText: `window with id ${props.id} not found` }
            }
            return { ok: true, data: undefined }
        } catch (error) {
            console.error(error)
            return { ok: false, code: 'error', errorText: 'Error while closing window' }
        }
    }
}
