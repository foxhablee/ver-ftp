import type { BrowserWindow, IpcMainInvokeEvent } from 'electron'
import { createSubwindow } from './createSubwindow'
import { loadSubwindowContent } from './loadContent'
import { type IpcCreateSubwindowProps, type IpcResponseCreateSubwindow } from '../model/contract'

interface Deps {
    parentWindow: BrowserWindow
}

export function ipcHandlerCreateSubwindow({ parentWindow }: Deps) {
    return async (_: IpcMainInvokeEvent, props: IpcCreateSubwindowProps): Promise<IpcResponseCreateSubwindow> => {
        try {
            const win = createSubwindow({ parent: parentWindow, size: props.size, modal: props.modal })
            loadSubwindowContent(win, props)
            return { ok: true, data: undefined }
        } catch (error) {
            console.error(error)
            return { ok: false, error: 'Error while creating subwindow' }
        }
    }
}
